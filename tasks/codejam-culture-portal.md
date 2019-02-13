# CodeJam-Culture-Portal

## Deadline: Monday, Jan 28, 2019 23:59
## Task
Working in groups, you have to develop a web portal about culture of Belarus on the given topic.

The goal is to make content project quickly using available simple tools, distriburing work and helping each other.

## Getting the assignment and groups
You can find your group and contacts here:  
https://docs.google.com/spreadsheets/d/1VMUmAlqGDTOopt1WotosQBVLLSD4n6MGU7BoSE_l_Z8/edit#gid=0  

## Topics  
- [Architects of Belarus](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D0%B8) for groups 1, 7, 13, 19, 25, 31, 37, 43;
- [Writers of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9F%D1%96%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%96%D0%BA%D1%96_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 2,8,14,20,26,32,38,44
- [Poets of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9F%D0%B0%D1%8D%D1%82%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) делают группы 3,9,15,21,27,33,39,45
- [Photographers of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%A4%D0%B0%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 4,10,16,22,28,34,40,46;
- [Film directors of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9A%D1%96%D0%BD%D0%B0%D1%80%D1%8D%D0%B6%D1%8B%D1%81%D1%91%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 5,11,17,23,29,35,41;
- [Theater directors of Belarus](https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%A2%D1%8D%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%8F_%D1%80%D1%8D%D0%B6%D1%8B%D1%81%D1%91%D1%80%D1%8B_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96) for groups 6,12,18,24,30,36,42;

## Indicative algorithm for a group work

- Start a group chat with participants;
- Discuss which strong points every member of the team has;
- Split the major task into small subtasks. Each couple hours long;
- You can use resourсes for team work such as trello.com / GitHub Projects / Google Sheets (Example  of [template](https://docs.google.com/spreadsheets/d/1c8OGxkATLMkBhEXW9xSsxWXg6B6r0-_CKZeEMoKFqGI/edit#gid=0));
- Someone has to make primary structure of the project where the rest will do their PRs later;
- Collaboration will be carried out using Pull Requests. Everyone must merge PRs by him/herself;
- You will need to take into account the time required for improvements or corrections before the deadline, because something might go wrong;
- Students may involve their mentors, if mentors don't mind;

## Technical requirements
The portal must contain the following components / functional parts / blocks:

* Main page with
  * portal's description
  * 'author of the day' block
  * developer team description (userpics + github accounts + nicknames/names), and contribution of each member
* Navigation
* Page with a list of authors on the given topic with search widget
  * search should be on the current language with ability to search by name, city/place of birth
  * 5-7 authors are enough to complete the task successfully. You can take more, if you have enough time and willingness
* Page of an author with
  * his/her picture
  * biography in the form of timeline (example [here](https://reactjsexample.com/a-vertical-timeline-component-for-react/))
  * list of artist's works with the date of creation
  * photo gallery with author's picture and pictures of his/her works 
  * youtube video about the author / works / period of time author lived. Video must open in a new overlay (modal)
  * place of author's major activity on a map: google / openstreetmap (leaflet) / yandex
  * it's fine if **not** every element (timeline, video, photo gallery, map) will be present on every page
* Web portal must be deployed on Github Pages
* Web portal has to be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated. For this purposes you can use this library https://www.i18next.com/ or any similar;

Portal should be relatively correctly displayed on tablets and mobile phones

Content for the portal (texts, facts + year for a timeline, photo for a gallery, youtube video, place of life / activity) can be taken from Wikipedia, YouTube, Google etc.

Design example / UX:

- http://ses.fi/en/films/categories/documentaries/
- https://www.aia.org/aia-architects?filters=typeFilters%3A2496%3B
- https://literature.britishcouncil.org/writers/?Genre=3

Galleries / timelines / overlays can be found here - https://bestofjs.org/

Design / appearance is not very important for this task. The main things are: text / timeline / button for video / photo gallery / search control on the page with a list of authors

## Technical limitations
You can develop portal using libraries of visual components such as **material-ui**, **bootstrap**. You can also use any **CSS-frameworks**.

Your application can be SPA or just a set of static html pages. You can use *Reactjs* and any *static  generated website engine*. You can use *gatsbyjs* to get additional points

Such things as page content and internal data structures for timeline / search / map / photo gallery / video overlay have to be considered on your own.

## How to submit
You'll have to fill in the [the form with participants and link to github page](https://docs.google.com/forms/d/e/1FAIpQLScYwu8-g9FpMYYKxSrjz4Sx2z8_Q14XD3tSmwznojFGyUzx7A/viewform ) before the deadline.

Team member with the lowest rating in the group that takes part in the task has to make a presentation of his/her team's project. During the presentation the following things have to be shown:

- main page;
- list of authors with search field (filtering);
- author's page with photo gallery, timeline and video;
- 1-3 difficulties occurred during teamwork

Presentations will be online in 2 sessions of 2 hours each with Dzianis Sheka and Dzmitry Varabei as examinators. January 30 - February 1

## Requirements for commits, PR, repository
[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md)

## Evaluation

Mark will be the same for all team members based on the result of presentation

Maximum points - **185**

- **20** Main page + page with a list of authors + author's page;
- **from 0 to 20** Design;
- **10** Author's page contains timeline;
- **20** Author's page contains photo gallery;
- **10** Author's page contains video overlay;
- **10** Author's page contains map (geowidget);
- **10** Page with list of authors contains search widget;
- **20** Portal has two languages;
- **10** Portal has third language;
- **10** Confidence of the project presentation;
- **30** Project is made using gatsbyjs;
- **15** Project is made using react;
- **-50** if there are less than 5 commits from each team member. Everyone should merge their own PRs.
- up to **-50** points for violations
[stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md)

## Who review the tasks?
@davojta / @dzmitry-varabei
