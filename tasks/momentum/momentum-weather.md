## Советы по выполнению задания Momentum
- [ссылка на задание](momentum.md)

#### 4. Виджет погоды
Приводится пример создания приложения с прогнозом погоды для указанного пользователем города.  

#### Регистрация в OpenWeatherMap API
Данные о погоде предоставляют API погоды. 

Регистрируемся в OpenWeatherMap API [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up)

На указанную при регистрации почту приходит письмо с предложением подтвердить e-mail. Подтверждаем.

На странице [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys) видим свой API key

#### Получение информации о погоде
Для получения информации о погоде создаём ссылку
`https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`

Здесь:
- `Минск` - название города, можно указывать на русском или на английском языке
- `08f2a575dda978b9c539199e54df03b0` - API key полученный при регистрации 
- `lang=ru` - язык отображения описания погоды (можно указать `lang=en`)
- `units=metric` - температура в градусах Цельсия (можно указать `units=imperial` для отображения температуры в градусах Фаренгейта)

Дальше используйте только ссылку со своим собственным API key. Если использовать ссылку, пример которой приводится в задании, очень быстро исчерпается лимит API, и она перестанет работать.

#### Просмотр информации о погоде
Переходим по созданной ссылке со своим собственным API key. На странице отображается информация о погоде. Для удобного её отображения установите расширение [**JSONView**](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=ru)

По ссылке отображается объект с погодой. Некоторые свойства данного объекта:
- `.weather[0].id` - id иконки погоды
- `.weather[0].description` - описание погоды
- `.main.temp` - температура

#### Вывод информации о погоде в консоль
Получим информацию о погоде. Пока выведем её в консоль.

Для этого создадим асинхронную функцию:
```js
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
}
getWeather()
```
В функции `getWeather()` мы получили объект с погодой `data` и вывели в консоль интересующие нас свойства.

Ссылка в косых кавычках - шаблонная строка. Позже нам понадобится возможность добавить в шаблонную строку значение переменной - название указанного пользователем города.

Функция `getWeather()` не большая, не сложная. Единственное её неудобство - все полученные данные доступны исключительно внутри самой функции, получить их в основном коде невозможно. Асинхронные функции связаны с получением ответа от сервера и выполняются после того, как отработал весь код приложения. Это необходимо для того, чтобы весь код приложения не ждал пока асинхронная функция вернёт или не вернёт результат. 

#### Вывод информации о погоде на страницу
Выведем полученные данные на страницу
В `index.html` создадим элементы для отображения иконки погоды, температуры и описания погоды:
```html
<i class="weather-icon owf"></i>
<div class="temperature"></div>
<div class="weather-description"></div>
```
В js-коде найдём эти элементы:
```js
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
```
И внутри функции `getWeather()` укажем их содержание:
```js
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
```
Блокам с температурой и описанием погоды мы указали `textContent`, иконке погоды добавили класс.

#### Отображение иконки погоды
Иконки погоды для Open Weather Map API находятся здесь https://websygen.github.io/owfont/
Скачиваем, распаковываем, папку `fonts` помещаем в папку с проектом, файл `owfont-regular.css` из скачанной папки `css` помещаем в папку `css` нашего проекта, подключаем в `index.html`  перед подключением `style.css`. 
```html
<link rel="stylesheet" href="css/owfont-regular.css">
```
Если вы используете дефолтную вёрстку, шрифт и стили иконок погоды в ней уже подключены.

### Получаем погоду для определённого города
Когда пользователь ввёл название города в предназначенный для этого `input` с классом `city` нам необходимо получить информацию о том, какой город он указал.
Для этого находим соответствующий элемент и назначаем ему слушатель события `change`, который сработает если пользователь нажмёт клавишу `Enter` или фокус уйдёт из поля `input`. Когда на `input` произойдёт событие `change`, вызываем функцию `getWeather()`, изменив в ней `url`:
```js
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
```
Теперь у нас отображается погода того города, который указан в блоке `city`.

В функции `getWeather()` перед добавлением иконке погоды дополнительного класса укажем строку
```js
weatherIcon.className = 'weather-icon owf';
```
Этой строкой мы удаляем все лишние классы перед добавлением нового, чтобы иконка погоды обновлялась корректно.

[Код приложения](https://github.com/rolling-scopes-school/stage1-tasks/tree/gh-pages/weather)  
[Demo](https://rolling-scopes-school.github.io/stage1-tasks/weather/)

#### Ключевые навыки, которые вы приобрели:
- получение данных от API
- работа с асинхронными запросами
- создали приложение погоды