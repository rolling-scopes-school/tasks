| Deadline | Project name    |
| -------- | --------------- |
| no       | Singolo. Part 1 |

# Homework: Singolo. Part 1. Difficulty Level 1.

Create a web page, according to:

PSD:

**[Singolo. Part 1. PSD](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/part-1/singolo1.psd)**

PNG:

**[Singolo. Part 1. PNG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/part-1/singolo1.png)**

The reference point here is a successful comparison via Pixel Perfect extension. "Perfect" means markup items are identcal to image layout pixel to pixel. There is a list of common cases:

- Major blocks should be positioned perfectly on given width of the screen (1200px).
- Images, logos if any should be positioned perfectly according to their place inside the visual block.
- Icons should keep perfect distance to the related text.
- If correct font is applied, check the height of the text - it should match the original. Width could vary. But, the common practice is to add letter-spacing property to correspong text in headings, motto or blockquotes.
- If there are multiple objects in row, and their width looks identical, than they should be equal by width. A few pixel differnce does not matter.
- Background or foreground slight shadows are not necessary to use. If you still want to use them, there are two solutions to admit. First is to merge layers in graphic redactor and use it as background image. Second is to add shadow as box-shadow the way you visually can handle it.

_[PerfectPixel extension for chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)_

Browser Support: **Google Chrome, Mozilla Firefox, Microsoft Edge**. It means, first we develop for Google Chrome, and use pixel perfect to check application fits. Then we check if Mozilla Firefox, Microsoft Edge do not visually break the styles.

## Procedure

Create a new private repository named _singolo_ in **your** Github account and upload your HTML (singolo1.html) and CSS (singolo1.css) files.

## Assessment criteria

If the task is fully completed, and no defects are found by mentor, you are awarded **100 points**. This concerns the markup and use of HTML and CSS.

You must have only one HTML file and only one CSS file (or two CSS files, where second one holds the collection of _@font-face_ rules separately) in your solution. Fonts themselves and images must be hosted locally in the `assets` folder.

1. Failure to submit on time may result in losing **up to 40 points** of the total homework score!
2. Failure to comply with the requirements of any task item may result in losing **3 to 10 points**.
3. Failure to comply with coding standards or syntax requirements may result in losing **up to 20 points**.
4. Failure to comply with the PSD template (except for nuances with fonts) may result in losing **up to 40 points**.

## Terms of Reference

“Interactive“ means effects or animations depending on user's actions, like on hover or on click.

- Care about background styles.
- Care about lines and colors.
- Care about pointer cursor.

1. Header (`<header>` holds logo and navbar only)

- Interactive navbar.
- Logo consists of 2 different text elements, the white and the red ones.
- Think of where `<h1>` should be used.
- Do not forget about bottom line.

2. Slider block

- Arrows should be interactive. Nothing should happen on click.
- There are 3 options to make images. Choose one:
- a. Create images with multiple layers using z-index. Items should be absolute positioned.
- b. Create full images of vertical and horizontal phones using image editor (photoshop or analog).
- c. Combine both options and make 3 image items: shadow, phone container, inner image. The image of phone and shadow can be just rotated.
- Do not forget about bottom line.

3. Our Services block

- 3 columns layouts. Better to use flexbox or grid.
- Images can be used as icons and circles around. Or just icons, and circles are border-radius properties.
- If there are more text in description of the text cell, than overflow should be hidden.
- Do not forget about bottom line.

## Useful links

To simplify work with CSS3 cross-browser syntax and selectors, you can use CSS3 generator at:
http://css3generator.com/

Fonts can be found here:  
[Lato, google](https://fonts.google.com/specimen/Lato)  
[Lato, fontsquirrel](https://www.fontsquirrel.com/fonts/lato)  
If you can't find font you are looking for, just replace it with same serif-style font.

## If you don't have Photoshop to work with .psd files

There’s a good design tool: [Photopea](https://www.photopea.com/)
No sign-up is required, just click the “open” button or drag&drop the downloaded PSD template. Yes, its functionality is rather limited, but it is perfectly suitable for work with layers.
If you need to extract an image, the “download .png” or “download .svg” function is available.
It meets all the requirements for this homework.

| Крайний срок сдачи | Имя проекта     |
| ------------------ | --------------- |
| no                 | Singolo. Part 1 |

# Домашнее задание: Singolo. Part 1

Сверстать страницу, согласно макету:

PSD:

**[Singolo. Part 1. PSD](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/part-1/singolo1.psd)**

PNG:

**[Singolo. Part 1. PNG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/part-1/singolo1.png)**

Ключевым моментом является полное соответствие макету. Это достигается совпадением 2 изображений при наложении слоя с картинкой поверх готовго решения с использованием расширения Pixel Perfect. Уделите внимание следующим важным и распространенным моментам:

- Основные блоки должны быть идеально расположены на заданной ширине экрана (1200px).
- Изображения, логотипы, если таковые имеются, должны быть идеально расположены в рамках логического контейнера.
- Иконки должны сохранять идеальное расстояние до соответствующего им текста.
- Если применяется правильный шрифт, проверьте высоту текста - он должен соответствовать исходнику. Ширина может варьироваться. Но общепринятой практикой является добавление свойства межбуквенного интервала (letter-spacing) к соответствующему тексту в заголовках, девизе или цитате.
- Если в строке несколько объектов, а их ширина выглядит одинаково, то блоки, содержащие их, должны быть равны по ширине. Разница в несколько пикселей не имеет значения, важно совпадение размеров.
- Если вы используете тени, есть два решения, которые можно использовать. 1. Сначала необходимо объединить слои в графическом редакторе и использовать изображение в качестве фонового. 2. Добавить тень как box-shadow, и затем ее визуально обработать и придать необходимый вид.

_[Расширение PerfectPixel для Google Chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)_

Поддержка браузеров: **Google Chrome, Mozilla Firefox, Microsoft Edge**. Это означает, что сначала мы разрабатываем для Google Chrome и используем Pixel Perfect для проверки соответствия приложения. Затем мы проверяем, не рушат ли Mozilla Firefox, Microsoft Edge наши стили.

## Формат сдачи

Создайте репозиторий _singolo_ в **вашем** Github аккаунте и загрузите файлы HTML (singolo1.html) и CSS (singolo1.css).

## Критерии оценки

Если задание выполнено полностью, и проверяющий не обнаружил никаких дефектов, вы получаете **100 баллов**. Это касается разметки и использования HTML и CSS.

У вас должен быть только один HTML-файл и только один CSS-файл (или два CSS-файла, где второй содержит отдельную коллекцию правил _@font-face_) в вашем решении. Сами шрифты и изображения должны размещаться локально в папке «assets».

1. За сдачу не вовремя, вы можете потерять **до 40 баллов** от общего результата!
2. Несоблюдение стандартов кода или требований синтаксиса может привести к потере **до 20 баллов**.
3. Несоблюдение шаблона PSD (за исключением нюансов со шрифтами) может привести к потере **до 40 баллов**.
4. Невыполнение какого-либо из технических требований может привести к потере **от 3 до 10 баллов**.

## Технические требования

«Интерактивный» - означает, что у элемента присутствует визуальный эффект или анимация в зависимости от действий пользователя, например, при наведении курсора или нажатии. Это может отражаться в свойствах:

- pointer: cursor,
- background,
- underline,
- color.

1. Header (`<header>` содержит только логотип и панель навигации)

- Интерактивная панель навигации.
- Логотип содержит 2 разных текстовых элемента, белый и красный.
- На странице обязательно должен присутствовать один элемент `<h1>`. Расположить на свое усмотрение.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

2. Slider block

- Стрелки должны быть интерактивными. При нажатии ничего происходить не должно.
- Есть 3 варианта сделать картинки. Выберете один:
- a. Создайте изображения с наложением нескольких слоев, используя z-index. Элементы должны быть в position: absolute.
- b. Создайте полные изображения вертикального и горизонтального телефонов с помощью графического редактора (фотошоп или аналог).
- c. Объедините оба варианта и создайте 3 элемента изображения: тень, контейнер телефона, внутреннее изображение. В таком случае изображение телефона и тени можно просто повернуть на 90 градусов.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

3. Our Services block

- 3-х колоночный макет снизу. Лучше использовать [flexbox](https://habr.com/ru/post/467049/) или [grid](https://tuhub.ru/posts/css-grid-complete-guide).
- Изображения можно использовать как иконки и круги вокруг. Или просто как иконки, а круги - это свойство border-radius.
- Если в текстовой ячейке больше текста, чем она вмещает, и он начинает выходить за границы элемента, то излишний текст должен быть скрыт.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

## Полезные ссылки

Шрифты можно найти здесь:
[Lato, google](https://fonts.google.com/specimen/Lato)  
[Lato, fontsquirrel](https://www.fontsquirrel.com/fonts/lato)  
Если вы не можете найти или скачать нужный шрифт, просто замените его шрифтом с тем же типом засечек.

## Если у вас нет Photoshop для работы с файлами .psd

Есть хороший инструмент для дизайна: [Photopea](https://www.photopea.com/)
Регистрация не требуется, просто нажмите кнопку «Открыть» или перетащите загруженный шаблон PSD. Да, его функциональность довольно ограничена, но он отлично подходит для работы со слоями.
Если вам нужно извлечь изображение, доступна функция «download .png» или «download .svg».
Он отвечает требованиям для этого домашнего задания.
