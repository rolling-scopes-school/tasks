| Deadline         | Repo                           |
| ---------------- | ------------------------------ |
| 23:59 27.02.2020 | created by students themselves |

# CodeJam-Culture-Portal

## Task

Working in groups, you have to develop a web portal about culture of Belarus on the given topic.

The goal is to make content project quickly using available simple tools, distriburing work and helping each other.

## Getting the assignment and group

You can find your group and contacts here:
https://docs.google.com/spreadsheets/d/1_kRtD84hdl-aPxClLaPcDf1P2Z0lDi5q1yDqhWzsPZI/edit#gid=0

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
- Document them;
- You can use resourсes for team work such as trello.com / GitHub Projects / Google Sheets (Example of [template](https://docs.google.com/spreadsheets/d/1c8OGxkATLMkBhEXW9xSsxWXg6B6r0-_CKZeEMoKFqGI/edit#gid=0));
- Someone has to make primary structure of the project where the rest will do their PRs later;
- Collaboration will be carried out using Pull Requests. Everyone must merge PRs by him/herself;
- You will need to take into account the time required for improvements or corrections before the deadline, because something might go wrong;
- Students may involve their mentors, if mentors don't mind;

### worklog

To show process of development it needs to describe small amount of time and what work was accomplish by whom during that time.

#### Example

You need to provide high level, feature base (what need to score) description.

_davojta_

| time spent | feature                                |
| ---------- | -------------------------------------- |
| 2h         | base structure of the project with CRA |
| 10h        | put content in json                    |
| 4h         | setup image gallery                    |

_petriken_

| time spent | feature                         |
| ---------- | ------------------------------- |
| 3h         | design and markup for main page |
| 2h         | markup for author page          |
| 4h         | setup geowidget                 |

## Technical requirements

The portal must contain the following components / functional parts / blocks:

### Pages

- Main page with
  - portal's description
  - 'author of the day' block
- Navigation
- Page with a list of authors on the given topic with search widget
  - Search should be on the current language with ability to search by name, city/place of birth
  - **7-12** authors are enough to complete the task successfully. You can take more, if you have enough time and willingness
- Page of an author with
  - Author's name
  - Years of life
  - Her/his picture
  - Biography in the form of timeline (example [here](https://reactjsexample.com/a-vertical-timeline-component-for-react/))
  - List of artist's works with the date of creation
  - Photo gallery with author's picture and pictures of his/her works
  - Youtube video about the author / works / period of time author lived. Video must open in a new overlay (modal)
  - Place of author's major activity on a map: google / openstreetmap (leaflet) / yandex
  - It's okay if **not** every element (timeline, video, photo gallery, map) will be present on every page
- Page with team members with
  - Avatars for each member
  - Link to github / linked in / blog
  - Role in the team (contribution)
- Page with worklog
  - Table with hours and time for implementing functionality
  - Main 1-3 difficulties for the team during implementation
  - Self-evaluation with checkboxes and list of all requirements
- Page with styleguide
  - links / buttons / inputs
  - typography elements
  - colors and its purpose (primary, secondary)
  - icons
  - the page can be deployed to other url
- Web portal must be deployed on Github Pages / netlify / google firebase / etc
- Web portal has to be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated. For this purposes you can use this library https://www.i18next.com/ or any similar;

Galleries / timelines / overlays can be found here - https://bestofjs.org/.

### Mobile friendly

Portal should be relatively correctly displayed on tablets and mobile phones.

### Content

Content for the portal (texts, facts + year for a timeline, photo for a gallery, youtube video, place of life / activity) can be taken from Wikipedia, YouTube, Google etc.

### Design

Design / appearance is **important** for this task. The text / timeline / button for video / photo gallery / search control on the page with a list of authors are important as general look and feel.

The design from technical point of view should include:

- typography for the portal (h1-h6 headers, text style, 1-2 font types on the page)
- same styles for links, buttons,
- icon
- limited amount of colors

Usage of ready templates / themes are allowed.

Design example / UX:

- https://gatsby-theme-90s.netlify.com/ - theme for gatsby
- https://www.aia.org/aia-architects?filters=typeFilters%3A2496%3B - grey and minimalistic
- https://github.com/narative/gatsby-theme-novela-example - white minimalistic theme
- https://www.humbertpoyet.com/home/restaurant - clean design
- https://www.culture.go.kr/english.do - humble design
- https://www.abcd-architecture.fr/ - with animation

## Technical limitations

You **should** develop portal using libraries of visual components such as **material-ui** or **bootstrap**.

You **should** use _Reactjs_ or use _gatsbyjs_.

Such things as page content and internal data structures for timeline / search / map / photo gallery / video overlay have to be considered on your own.

## How to submit

You'll have to fill in the [the form with participants and link to github page](https://forms.gle/VSeKDMAjuCdt5gtBA) before the deadline.

Team member with the lowest rating in the group that takes part in the task has to make a presentation of his/her team's project. During the presentation the following things have to be shown:

- readme with self evaluation and worklog
- PR of all team members
- main page;
- list of authors with search field (filtering);
- author's page with photo gallery, timeline and video;
- 1-3 difficulties occurred during teamwork;

Presentations will be online in 2 sessions of 2 hours each with Dzianis Sheka and other activist as examinators.

## Requirements for commits, PR, repository

[General requirements from stage 2](https://docs.rs.school/#/stage2?id=%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-%d0%b2%d1%8b%d0%bf%d0%be%d0%bb%d0%bd%d0%b5%d0%bd%d0%b8%d1%8e-%d1%82%d0%b0%d1%81%d0%ba%d0%be%d0%b2-%d0%b2-rsschool-stage2).

## Evaluation

Mark will be the same for all team members based on the result of presentation.

Maximum points - **280**

### Min scope - **50**

- [ ] **10** Main page + page with a list of authors + author's page (only pages with content without widgets);
- [ ] **10** Page with team members + page with worklog
- [ ] **10** Page with list of authors contains search widget;
- [ ] **20** Portal has two languages;

### Normal scope - **140**

- [ ] **20** Portal has page with styleguide;
- [ ] **10** Mobile version is okey
- [ ] **10** Ipad/tablet version is okey
- [ ] **10** Author's page contains timeline;
- [ ] **10** Author's page contains video overlay;
- [ ] **20** Author's page contains photo gallery;
- [ ] **10** Author's page contains map (geowidget);
- [ ] **from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)
- [ ] **20** Material-ui / bootstrap is used
- [ ] **10** Portal has third language;

### Extra scope - **90**

- [ ] **10** Confidence of the project presentation;
- [ ] **10** Project is made using gatsbyjs;
- [ ] **10** Contentful / netlify cms is used for content management
- [ ] **20** Animations / special effects like paralax
- [ ] **up to 20** Outstanding design;
- [ ] **20** Storybook/styleguidist/other react styleguide tool usage for the page with styles

### Fines

- **-50** if there are less than 5 commits from each active team member. Everyone should merge their own PRs.
- up to **-50** points for violations
  [stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md)
- **-40** if there is no worklog for team
- **-20** too primitive (ugly for 2020) design / UX

## examples

- https://github.com/rss-com-lab/staging-alesya-website - gatsby with translation
- https://alesia-ivankova.github.io/ - deployed version
- https://grnkvch.github.io/CodeJam-Culture-Portal/en/ - gatsby with translation
- https://culture-portal-uniorunr.netlify.com/

## answers to the questions

- https://drive.google.com/open?id=1nBMuIWEZ3-pJIlABGWkH-wgJLdj8OP7t - xmind with answers
- https://www.youtube.com/watch?v=mstHfkOk4zQ&list=PLe--kalBDwjiBYlF6OivjURvvJg58tYY2&index=14&t=0s - стрим набора 2018q3 с ответами на вопросы

## Who review the tasks?

@davojta / @rs-activists

It will be couple of evening (22 00 - 24 00 Minsk time) for online presentations in skype
