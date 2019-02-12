# CodeJam-Culture-Portal

## Deadline: Monday, Jan 28, 2019 23:59
## Task
Working in groups you have to develop a web portal about culture of Belarus on the given subject.  

The goal is to make content project quickly on given topic working in groups.

## Getting the assignment and groups  
You can find your group and contacts here:  
https://docs.google.com/spreadsheets/d/1VMUmAlqGDTOopt1WotosQBVLLSD4n6MGU7BoSE_l_Z8/edit#gid=0  

## Subjects  
- [Architects of Belarus](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D0%B8) for groups 1, 7, 13, 19, 25, 31, 37, 43;
- [Poets of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9F%D0%B0%D1%8D%D1%82%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 3,9,15,21,27,33,39,45;
- [Photographers of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%A4%D0%B0%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 4,10,16,22,28,34,40,46;
- [Film directors of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9A%D1%96%D0%BD%D0%B0%D1%80%D1%8D%D0%B6%D1%8B%D1%81%D1%91%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 5,11,17,23,29,35,41;
- [Theater directors of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%A2%D1%8D%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%8F_%D1%80%D1%8D%D0%B6%D1%8B%D1%81%D1%91%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 6,12,18,24,30,36,42;

## Indicative algorithm for a group work

- Start a group chat with members;
- Discuss which strong points does every member of the team have;
- Split the major task into small subtasks each couple hours long;
- You can use resourses for team work such as trello.com / GitHub Projects / Google Sheets (Example  of [template](https://docs.google.com/spreadsheets/d/1c8OGxkATLMkBhEXW9xSsxWXg6B6r0-_CKZeEMoKFqGI/edit#gid=0));
- Somebody should make primary structure of the project where others can make PRs later;
- Collaboration must be carried out using Pull Requests. That means that someone (or maybe everybody) from your team will be merging Pull Requests;
- You will need to take into account the time required for improvements or corrections before the deadline, because something might go wrong;
- Students may involve their mentors, if mentors don't mind;

## Technical requirements
The portal must contain the following components / functional parts / blocks:
* Main page with
  * portal's description
  * 'author of the day' block
  * developer team description (userpic + github accounts + nicknames/names), and contribution of each member
* navigation
* Page with a list of artists on the gives subject with search widget
  * search should be on the current language with ability to search by name, city/place of birth
  * 5-7 artists are enough to complete the task successfully. You can take more, if you have enough extra time and wish
* page of an artist with
  * his/her picture
  * biography in the form of timeline (example [here](https://reactjsexample.com/a-vertical-timeline-component-for-react/))
  * list of artist's works with the date of creation
  * photo gallery with author's and his/her works' pictures
  * youtube video about the author / work / period of time author lived. Video must open in a new overlay (modal)
  * place of author's major activity on a map: google / openstreetmap (leaflet) / yandex
  * it's fine if not every element (timeline, video, photo gallery, map) is present on every page
* web portal must be deployed on Github Pages
* web portal should be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated For this purposes you can use this library https://www.i18next.com/ or any similar;  

Portal should be relatively correctly displayed on tablets and mobile phones

Content for the portal (texts, facts + year for a timeline, photo for a gallery, youtube video, place of life / activity) can be taken from Wikipedia, YouTube, Google etc.

Design example / UX:

http://ses.fi/en/films/categories/documentaries/
https://www.aia.org/aia-architects?filters=typeFilters%3A2496%3B
https://literature.britishcouncil.org/writers/?Genre=3

Galleries /  timelines / overlays can be found here - https://bestofjs.org/

Design / appearance is not very important for this task. The main things are: text / timeline / button for video / photo gallery / search control on the page with a list of authors

## Technical limitations
You can develop portal using libraries of visual components such as **material-ui**, **bootstrap**. You can also use any **CSS-frameworks**

Your application can be SPA or just a set of static html pages. You can use *Reactjs* and any *static  generated website engine*. You can use *gatsbyjs* to get additional points

Such things as page content and internal data structures for timeline / search / map / photo gallery / video overlay have to be considered on your own.

## How to submit

You'll have to fill in the [the form with participants and link to github page](https://docs.google.com/forms/d/e/1FAIpQLScYwu8-g9FpMYYKxSrjz4Sx2z8_Q14XD3tSmwznojFGyUzx7A/viewform ) before the deadline.

Team member with the lowest rating in the group that takes part in the assignment has to make a presentation of his/her team. During the presentation the following things should be shown:

- main page;
- list of authors with search field (filtering);
- author's page with photo gallery and video;
- tell about 1-3 difficulties occurred during teamwork

Presentations will take place online in 2 sessions of 2 hours each with Dzianis Sheka and Dzmitry Varabei as examinators. January 30 - February 1


## Задание
Реализовать портал культуры Беларуси, работая в группе и по выданной теме.

Цель - сделать быстро контент проект, используя простые доступные инструменты, распределяя работу и помогая друг другу. 

## Выдача задания и группы
Узнать свою группу и контакты можно тут - https://docs.google.com/spreadsheets/d/1VMUmAlqGDTOopt1WotosQBVLLSD4n6MGU7BoSE_l_Z8/edit#gid=0

## Темы
- [Архитекторы Беларуси](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D0%B8) - делают группы 1, 7, 13, 19, 25, 31, 37, 43
- [Писатели Беларуси](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9F%D1%96%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%96%D0%BA%D1%96_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) делают группы 2,8,14,20,26,32,38,44
- [Поэты Беларуси](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9F%D0%B0%D1%8D%D1%82%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) делают группы 3,9,15,21,27,33,39,45
- [Фотографы Беларуси](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%A4%D0%B0%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) делают группы 4,10,16,22,28,34,40,46
- [Режиссеры кино Беларуси](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9A%D1%96%D0%BD%D0%B0%D1%80%D1%8D%D0%B6%D1%8B%D1%81%D1%91%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96)  делают группы 5,11,17,23,29,35,41
- [Режиссеры театра Беларуси](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%A2%D1%8D%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%8F_%D1%80%D1%8D%D0%B6%D1%8B%D1%81%D1%91%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) делают группы 6,12,18,24,30,36,42

## Примерный алгоритм для групповой работы

- Завести групповой чат с участниками
- Обсудить, кто в какой области силен
- Выделить задачи размером в пару часов 
- Задокументировать их
- Можно использовать ресурсы для командной работы - trello.com / GitHub Projects / завести задачи в googlesheets (вот возможный [шаблон](https://docs.google.com/spreadsheets/d/1c8OGxkATLMkBhEXW9xSsxWXg6B6r0-_CKZeEMoKFqGI/edit#gid=0))
- Кто-то должен сделать первичную структуру проекта - потом остальные будут делать PR
- совместная работа будет вестись через пул реквесты, т.е. кто-то из команды / или все мержат пул реквесты
- надо учесть время, если что-то пойдет не так и потребуются исправления перед дедлайном
- студенты могут привлекать своих менторов, если сами менторы не против

## Тех задание
Портал должен содержать следующие компоненты / функциональные части / блоки:

* главную страницу с 
  * описанием портала
  * блоком "автор дня"
  * описанием команды проекта (аватарки + гитхаб аккаунты + ники / имена), а также вклад каждого участника 
* навигацию
* страницу со списком деятелей культуры по заданной теме с поиском
  * поиск должен производиться по имени на текущем языке и по городу / месту рождения
  * для выполнения задания будет достаточно 5-7 деятелей культуры, можно больше, если будет время и желание 
* страницу деятеля культуры с 
  * его фотографией, 
  * биографией, выполненной в виде таймлайна (пример по [ссылке](https://reactjsexample.com/a-vertical-timeline-component-for-react/))
  * списком произведений соответствующей темы вместе с годом создания
  * галереей фотографий, относящихся к человеку и его произведениям
  * youtube видео про автора / произведение / эпоху, в которой он жил. Видео должно открываться в отдельном оверлее.
  * местом его основной деятельности в виде отметки на карте google / openstreetmap (leaflet) / yandex
  * для нескольких страниц нормальная ситуация, когда нету одного из элементов (таймлайна, видео, фотогалереи, геовиджета)
* сайт должен быть залит на GitHub Pages
* сайт должен быть на 3 языках - by, ru, en. Контент для каждой версии может отличаться, но элементы интерфейса должны быть переведены. Для переводов в реакте можно взять библиотеку https://www.i18next.com/ или любую аналогичную.

Портал должен относительно корректно отображаться в планшетном и мобильном представлении.

Контент для портала (тексты, факты + год для таймлайна, фото для галереи, ютуб ролик, место жизни / деятельности) можно брать из википедии, ютуба, гугла.

Пример дизайна / UX:
http://ses.fi/en/films/categories/documentaries/
https://www.aia.org/aia-architects?filters=typeFilters%3A2496%3B
https://literature.britishcouncil.org/writers/?Genre=3

Галереи / таймлайны / оверлеи можно искать на https://bestofjs.org/

Дизайн / внешний вид не важны для выполнения задания. Главное, чтобы на странице присутствовал текст / таймлайн / кнопка для видео / фотогалерея / контрол для поиска на странице списка.

## Технические ограничения
Создавать портал можно с помощью библиотек визуальных компонентов - material-ui, bootstrap. Можно использовать любые СSS фреймворки.

Приложение может быть как SPA, так и просто набором статических html. Можно использовать Reactjs и любой static  generated website engine. Для получения дополнительных баллов можно использовать gatsbyjs.

Контент для страниц и внутренние структуры данных для таймлайна / поиска / геовиджета / фотогалереи / видео оверлея необходимо продумать самостоятельно. 

## Как сдавать

К концу дедлайна необходимо заполнить [форму с участниками команды и ссылкой на гитхаб страницу](https://docs.google.com/forms/d/e/1FAIpQLScYwu8-g9FpMYYKxSrjz4Sx2z8_Q14XD3tSmwznojFGyUzx7A/viewform ).

Человек с самым низком скором в группе, которая принимает участие в задании, должен онлайн представить проект своей команды. В презентации надо показать: 

- главную страницу
- список деятелей с полем поиска (фильтрации)
- страницу деятеля культуры с фотогалереей и видео
- рассказать про 1-3 сложностей, возникших во время командной работы 

Сдача будет происходить онлайн в 2 сессии по 2 часа Денису Шеко / Диме Воробью. 30 января - 1 февраля.

## Требования к коммитам, PR, репозиторию
[Общие требования из этапа 2](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md)

## Оценка

Оценка будет одинаковой для всех участников группы по результатам презентации.

Максимальная оценка - **175**

- **20** Главная страница + страница со списком авторов + страница автора
- **от 0 до 20** Дизайн 
- **10** Страница автора содержит таймлайн
- **20**   Страница автора содержит фотогалерею
- **10**   Страница автора содержит видео оверлей
- **10**   Страница автора содержит геовиджет
- **10**   Страница cписка авторов содержит виджет поиска
- **20**  Перевод портала на 2 языка
- **10**  Перевод портала на 3 язык
- **10**   Уверенность презентации проекта
- **30** Проект сделан на gatsbyjs
- **15** Проект сделан на react
- **-50** при наличии менее 5 коммитов от каждого участника команды.  Каждый должен мержить свой PR сам. 
- до **-50** баллов за нарушения [stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md)

## Кто выполняет проверку задания?
@davojta / @dzmitry-varabei
