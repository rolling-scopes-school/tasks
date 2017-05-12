| Deadline  | Folder name |
|-----------|-------------|
| 23:59 11.06.2017 | rs-calendar |

# rs-calendar

### Description 
Необходимо улучшить процесс управления и работы с schedule и course curriculum. 

Система должна заменить два основных документа:
* https://docs.google.com/spreadsheets/d/1oM2O8DtjC0HodB3j7hcIResaWBw8P18tXkOl1ymelvE/edit#gid=0
* https://github.com/rolling-scopes/front-end-course/wiki/Course-Curriculum-2.0

### Внимание! Этот таск не предусматривает реализацию back-end логики и админки. В данный момент вам необходимо реализовать только клиентское SPA приложение и компонент календаря. 

### Tech stack
 * React
 * Webpack
 * Airbnb styleguide + lint
 * ES6+ or Typescript

### Функциональные требования. 

Система должна реализовывать два основных предствления:
  * [В виде календаря на десктопе](http://intljusticemission.github.io/react-big-calendar/examples/index.html)
  * На телефонах/планшетах должна быть responsive (like Google Calendar/ iOS calendar/ any other calendar).

На календаре должны отображаться дедлайны по таскам (и сами таски) и лекции/вебинары.
Система должна предостовлять возможность посмотреть задания на неделю/месяц.

По каждой лекции система должна предостовлять следующую информацию:
  * Видеозапись занятия / вебинара
  * Слайды
  * План занятия, описание
  * Возможность оставить фидбек по занятию
  * Время и место проведения, карту если необходимо
  * Список лекторов для данного занятия

По каждому таску:
 * Название таска
 * Описание таска
 * Кто будет проверять данный таск
 * Куда заливать данный таск
 * Критерии оценки (если есть)
 * Дедлайн
 * Возможность оставить комментарии и пояснения 
 
 ### Дизайн
 Дизайн системы может быть основан на базе  (optional)
  * https://www.lightningdesignsystem.com/
  * https://github.com/mashmatrix/react-lightning-design-system
  
  ### Back-end
  * Тестовый Back-end для этого таска будет развернут тут - http://128.199.53.150/
  * Исходный код тут - https://github.com/Shastel/rs-calendar-task
  
  
