## Советы по выполнению задания Museum - адаптивная вёрстка

- [ссылка на задание](museum-adaptive.md)

1. [Adaptive Design](#1-adaptive-design)
2. [Metateg viewport](#2-metateg-viewport)
3. [Media Queries](#3-media-queries)
4. [CSS variables](#4-css-variables)
5. [calc()](#5-calc)
6. [Adaptive menu](#6-adaptive-menu)

#### 1. Adaptive Design

Адаптивная вёрстка позволяет сайту хорошо выглядеть при любом разрешении экрана.  
Основное требование к адаптивной вёрстке - оптимальные размер и расположение элементов и отсутствие на сайте горизонтальной полосы прокрутки вне зависимости от того, просмотривают его на десктопе, планшете или мобильном устройстве.

Для адаптивного сайта дизайнер отрисовывает несколько макетов страницы для компьютеров, планшетов и смартфонов. Разработчик при вёрстке задаёт для каждого макета соответствующие размеры элементов и указывает разрешение экрана. Когда пользователь заходит на сайт, он видит только тот интерфейс, который соответствует ширине экрана его устройства.

Другим способом обеспечить правильное отображение страницы на разных устройствах является респонсивный (резиновый) дизайн, при котором размеры задают в процентах от ширины экрана. При респонсивном дизайне уменьшении ширины страницы сопровождается плавным изменением размеров элементов.

Как правило, в разработке совмещают оба эти подхода: при изменении ширины страницы какие-то элементы изменяются плавно, другие скачкообразно.

#### 2. Metateg viewport

В тег <head> html-кода необходимо вложить метатег viewport (при создании основы html-файла VS Code его добавляет автоматически)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

В этой строке мы указываем, что ширина видимой области равна ширине устройства, а изначального масштабирования нет. Чаще всего это оптимальный сценарий работы страницы.

#### 3. Media Queries

Адаптивная вёрстка достигается при помощи медиазапросов. Медиазапросы позволяют определять внешний вид веб-страниц в зависимости от ширины окна браузера.

При помощи медиа-запросов можно создавать так называемые контрольные точки (англ. breakpoints) и привязывать к ним CSS-стили.

Если речь о подходе `Desktop-First`, который реализуется в данном макете, в нём стили пишутся от большего к меньшему и используются медиазапросы, в которых указывается максимальная ширина экрана, к которой применяются указанные стили:

```css
@media (max-width: 1024px) {
  .card {
    width: 330px;
  }
}
@media (max-width: 796px) {
  .card {
    width: 280px;
  }
}
```

Код выше означает, что при ширине экрана до 796px ширина карточки равна 280рх, при ширине экрана от 796px до 1024рх ширина карточки равна 330рх, при ширине экрана большей чем 1024рх ширина карточки та, которая указана в основном css-коде страницы.

В медиазапросах указываем только те свойства элементов, которые изменились для указанной ширины экрана.

Чаще всего в медиазапросах изменяются:

- количество колонок
- размеры элементов
- отступы
- размер шрифта
- отдельные элементы могут скрываться
- добавляется адаптивное меню

#### 4. CSS variables

Если в css-коде страницы вы использовали css-переменные, их будет удобно и быстро изменить при помощи медиа-запросов. Вместо того, чтобы изменять значения отступов или размер шрифта каждого элемента, достаточно один раз его изменить в псевдоклассе `:root`.  
Например (здесь и дальше все числа произвольные):

```css
:root {
  --font1: 80px;
  --padding: 75px;
}
@media (max-width: 1024px) {
  :root {
    --font1: 50px;
    --padding: 60px;
}
@media (max-width: 796px) {
  :root {
    --font1: 40px;
    --padding: 40px;
  }
}
```

#### 5. calc()

Функция calc() позволяет рассчитать значения css-свойств. При адаптивной вёрстке использование функции calc() позволяет обеспечить плавное изменение размеров элементов при изменении ширины страницы, совместить адаптивный и респонсивный дизайн.  
Например:

```css
.gallery-img {
  width: calc(33.3% - 24px);
}
@media (max-width: 796px) {
  .gallery-img {
    width: calc(50% - 12px);
  }
}
```

В примере выше изображения размещаются в три колонки, расстояние между ними составляет 36рх. При ширине экрана 796рх изображения перестраиваются в две колонки, расстояние между ними составляет 24рх. Исходя из этих данных можно рассчитать ширину изображений. Если указан только один параметр изображения, другой определяется браузером автоматически с сохранением пропорций.

Для карты необходимо указать и ширину, и высоту. Например:

```css
@media (max-width: 1024px) {
  .map {
    width: calc(100vw - 330px);
    height: calc(65vw - 212px);
  }
}
```

#### 6. Adaptive menu

Адаптивное меню ещё называют бургер-меню из-за иконки-гамбургера при клике по которой оно открывается и закрывается.

Эта иконка присутствует в html-разметке не только на мобильных, но и на десктопных разрешениях, но там она скрыта свойством `display: none;`. А когда экран становится уже и все пункты меню в него перестают помещаться, необходимо навигацию спрятать всё тем же свойством `display: none;`, а гамбургер, наоборот, отобразить свойством `display: block;`.

Пока ничего сложного не было. Следующий шаг - для указанных в макете разрешений изменить стили адаптивного меню, чтобы в открытом виде оно выглядело так, как на макете. Указать ширину и высоту, свойством `flex-direction: column;` выстроить пункты меню в колонку, добавить оформление.

Последний пункт - кликом по иконке-гамбургеру добавлять или удалять адаптивному меню класс `open` и изменять вид самой иконки. Для этого идеально подойдёт метод `classList.toggle('open')`. Если класс `'open'` у элемента отсутствует, метод `classList.toggle('open')` добавляет его, иначе - убирает.

Таким образом, js-код для добавления адаптивного меню состоит буквально из нескольких строчек:

- при помощи метода `document.querySelector()` находим на странице иконку-гамбургер и адаптивное меню
- отслеживаем клики по иконке при помощи метода `addEventListener('click', toggle)`
- пишем код функции `toggle`, которая меняет класс `'open'` у иконки и меню
- в css нужно прописать разные стили для иконки и меню в зависимости от того есть у них класс `'open'` или этого класса нет

И самый-самый последний пункт - обеспечить красивое плавное появление и скрытие адаптивного меню.  
Чтобы меню плавно выезжало поверх секции `Welcome`, указываем ему абсолютное позиционирование, значение z-index, чтобы меню располагалось поверх остальных элементов и положение по горизонтали за границей экрана. Если, например, ширина адаптивного меню 420рх, свойство `left: -420px;` разместит его за левой границей экрана. Чтобы при этом не появилась полоса прокрутки, контейнеру, внутри которого размещается меню, указываем свойство `overflow-x: hidden;`. Чтобы меню появилось, достаточно классу `open` указать свойство `left: 0;`, а чтобы появление происходило плавно, используем свойство `transition: 0.5s`.
