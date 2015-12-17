Deadline         | Folder Name
-----------------|---------
10-JAN-2016 | wunderlist



##Version 0.1 (Draft)

This document is intended to describe core specification of “TeamBoard” project.

TeamList is an application for team collaboration via lists of ToDo-alike extended items.

###Glossary:

- Applicaton user (User)
- List item (Item)
- List of items (List)
- Item parts

###Use cases (UC):

1. User can register themself using unique e-mail address
2. User can perform:
  - CRUD operations for Lists
  - CRUD operations for Items
  - Modify Item parts
  - Enlist Items from any List or all Lists available to the User
  - (TBD) Enlist Items which met predefined criterias (Filter)

###Functional requirements (FR):
1. List can contain zero or more Items, each Item is a part of one List
2. Item contains the following info (Item parts):
  - Header (required, non-whitespace plain text, up to 100 symbols)
  - Description (plain text, up to 10 000 symbols)
  - Attachments (file, up to 100 Mb each)
  - Preview is available for images and plain text files;
  - A list of sub-tasks, each item has
  - ”complete” checkbox
  - text of the sub-task (plain text, up to 50 symbols)

Structural requirements (SR):
- Layers:
  1. Client side:
    - Angular JS 1.4+
    - jQuery 2+; jQueryUI 1.11
    - Whatever you want
  2. Server side:
    - [express.js](http://expressjs.com/)
    - [mongoose](http://mongoosejs.com/)
    - you can use [lowdb](https://github.com/typicode/lowdb) (for a while)

###Non-functional requirements (NR):
  - Supported Browsers: Latest version of Chrome

###References:
1. https://www.wunderlist.com
2. https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb

###Recommended reading
* [express.js API](http://expressjs.com/4x/api.html)
* [express + mongoose demo](https://github.com/madhums/node-express-mongoose-demo)
* [mongoose quick start](http://mongoosejs.com/docs/index.html)
* [mongoose api](http://mongoosejs.com/docs/api.html)
