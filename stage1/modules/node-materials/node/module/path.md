## Модуль Path

Одним из стандартных модулей является `path`. Модуль `path` предназначен для того, чтобы работать с путями в Node.js. При помощи него можно получить имя файла, расширение файла, имя папки, указать путь к файлу.

Чтобы использовать `path`, его необходимо подключить:
```js
const path = require('path');
```
Информацию о свойствах и методах `path` можно найти в [документации Node.js](https://nodejs.org/docs/latest-v14.x/api/path.html).

Рассмотрим некоторые из них:
* Получение данных о файле
    ```js
    // для файла, расположенного по адресу C:\Users\Admin\Desktop\nodejs-basic\index.js
    const path = require('path');
    console.log(path.basename(__filename)) // index.js - имя файла на Windows, полный путь к файлу на POSIX-системах
    console.log(path.dirname(__filename)) // C:\Users\Admin\Desktop\nodejs-basic - название папки
    console.log(path.extname(__filename)) // .js - расширение файла
    console.log(path.parse(__filename)); // возвращает объект в котором указывается корень диска, имя папки, имя файла, расширение файла, имя файла без расширения
    ```
* Конкатенация путей  
    ```js
    // для файла, расположенного по адресу C:\Users\Admin\Desktop\nodejs-basic\index.js
    const path = require('path');
    // вернет C:\Users\Admin\Desktop\nodejs-basic\test\second.html
    console.log(path.join(__dirname, 'test', 'second.html'));
    ```  
    `path.join()` объединяет заданные сегменты пути вместе, используя в качестве разделителя разделитель данной конкретной платформы  (для Linux - прямой слэш, для Windows - обратный слэш), результат - относительный путь  
    ```js
    const path = require('path');
    console.log(path.resolve(__dirname, './test', '/second.html'));
    ```  
    `path.resolve()` преобразует последовательность путей или сегментов пути в абсолютный путь справа налево и нормализует его: если в некоторых сегментах пути указываются слэши, а в некоторых нет, всё равно будет сгенерирован правильный путь.