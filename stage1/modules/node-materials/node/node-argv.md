## Аргументы командной строки
В Node.js есть возможность запустить файл с определёнными аргументами командной строки. При запуске файла аргументы передаются после его имени. Например, при запуске   
```powershell  
node test 1 2 3
```  
`1`, `2`, `3` - это аргументы.
Как внутри кода получить доступ к переданным при запуске файла аргументам? Для этого используется свойство глобального объекта `process` - `process.argv`

В файле `test.js` напишем код  
`console.log(process.argv);`  
В терминале выполним команду `node test 1 2 3`.  
В консоли отображается массив, первые два элемента которого - путь к файлу node.exe и путь к запущенному файлу. Дальше идут переданные аргументы.

Если нужно получить только аргументы, выполним код  
```js
console.log(process.argv.slice(2));
```
Метод `process.argv.slice(2)` возвращает новый массив, который начинается с элемента с индексом "2".

### Флаги
Чтобы иметь возможность отправлять аргументы в любом порядке или пропускать какие-то из них, аргументы командной строки можно пометить. Для этого используются флаги - слова или символы, которые указывают, что за ними следует аргумент командной строки. Перед флагами, как правило, ставят один или два дефиса, чтобы не перепутать их с аргументами. Например,
```powershell  
node test -m Hello
```  
Чтобы получить аргумент с указанным флагом, напишем код  
```js
const flagIndex = process.argv.indexOf('-m');
if (flagIndex !== -1) {
  const message = process.argv[index + 1];
  console.log(message);
}
```
Можно этот код преобразовать в функцию, получающую флаг аргумента и возвращающую его значение
```js
function getValue(flag) {
    const flagIndex = process.argv.indexOf(flag);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue('-m');
console.log(message);
```

### Практическое применение
На практике в случае, если вы пишете код для работы с аргументами командной строки самостоятельно, необходимо корректно обработать всевозможные ситуации — аргумент может отсутствовать, флаг может быть не передан, либо передан без значения, либо само наличие флага является булевым значением и т.д.    
Для повышения удобства работы с аргументами командной строки, а также минимизации вероятности возникновения ошибок удобно использовать готовые решения, такие как [minimist](https://www.npmjs.com/package/minimist), [commander](https://www.npmjs.com/package/commander), [yargs](https://www.npmjs.com/package/yargs) и другие.

### CLI options
Помимо пользовательских аргументов командной строки, можно передавать опции командной строки (CLI options). Опции командной строки передаются **до** пути к запускаемому файлу и модифицируют поведение Node.js. Например, можно отключить использование свойства `__proto__`. Так, запуск файла со следующим содержимым:
```js
// test.js
const protoObj = {
    sayHi() {
        console.log('Hi!');
    }
};
const obj = {};
obj.__proto__ = protoObj;
obj.sayHi();
```
с опцией `--disable-proto=throw`
```powershell
node --disable-proto=throw test
```
приведет к ошибке. Полный список опций можно посмотреть в [документации](https://nodejs.org/dist/latest-v14.x/docs/api/cli.html#cli_options) 

### Переменные окружения
Иногда нам нужно **снаружи** передать в код некое значение, которое будет использоваться нашим приложением. Например, мы хотим реализовать различное поведение приложения при запуске на "боевом" сервере и в процессе разработки. В этом нам могут помочь **переменные окружения**. Переменные окружения имеют синтаксис вида `variable_name=variable_value` и размещаются перед `node ...` Вот так при использовании терминала Bash можно передать переменную, которая будет показывать, в каком режиме сейчас запущено приложение:
```bash
PRODUCTION=false node test
```
А так при использовании терминала Powershell
```powershell
$env:PRODUCTION="false"; node test
```
Доступ к таким переменным внутри кода можно получить через `process.env`:
```js
const productionMode = process.env.PRODUCTION === "true";
if (productionMode) {
  console.log('Application is running in production mode');
  // do production things
} else {
  console.log('Application is running in development mode');
  // do dev things
}
```

### Задание
Напишите программу, которая просит у пользователя ввести два числа, складывает эти числа, если запускается с флагом `-s`, или перемножает, если запускается с флагом `-m`, после чего завершает свою работу. Для ввода и вывода информации используйте стандартные потоки ввода/вывода. Пример работы (пользовательский ввод начинается с `>`)
```powershell
> node test.js -m
Введите 2 числа
> 2 7
2 * 7 = 14
```
```powershell
> node test.js -s
Введите 2 числа
> 2 7
2 + 7 = 9
```

<details>
<summary>Пример решения</summary>

```js
const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-m', '-s'];
if (!allowedFlags.includes(flag)) {
    stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
    exit();
}
stdout.write('Введите, пожалуйста, два числа\n');
stdin.on('data', data => {
    const numString = data.toString();
    const numStringsArray = numString.split(' ');
    const hasIncorrectLength = numStringsArray.length !== 2;
    const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
    if (hasIncorrectLength || hasIncorrectValues) {
        stdout.write('Нужно ввести 2 числа, разделенных пробелом');
        exit();
    }
    const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
    if (flag === '-s') {
        const sum = firstNum + secondNum;
        stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
    } else {
        const mult = firstNum * secondNum;
        stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
    }
    exit();
});
```
</details>