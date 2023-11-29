# Lamernews

<small>[Lamernews](https://github.com/antirez/lamernews) is a hackernews style news site written in Ruby/Sinatra/Redis/JQuery</small>

Your task is implement it with Node.js (express.js/koa.js)/Mongo/React/Angular

## Service requirements

### REST endpoints

#### Articles

- `GET /articles/:startIndex/:count?sort` - should return json array with list of `count` articles starting from `startIndex` sorted in `sort` order (`latest|top`)
- `GET /articles/random` - should return random article
- `POST /articles/` - should create new article
- `PUT /articles/:id` - should update existing article
- `DELETE /articles/:id` - should delete existing article

#### Users

- `GET /users/:username` - should return _public_ user info
  - if `username` is the name of current logged in user – should return _all_ info
- `POST /users/:username` - should create new user if username isn't taken already
- `PUT /users/:username` - should update user information (`username` **should** be username of authorized user)
- `DELETE /users/:username` - should delete user profile (`username` **should** be username of authorized user)

To test your rest endpoints without UI you can use [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) chrome extension

### Models

#### User

User should contain following information (this info should be somehow shown on UI)

- username
- password
- email
- registration date
- posted comments count
- posted articles count

#### Article

Article should contain following information (this info should be somehow shown on UI)

- author username
- title
- link
- rating
- creation date
- comments

<small>\* You can introduce more models if it's needed</small>

## UI requirements

- SPA (React/Angular)
- Should have routing
- Should have nested views
- Use `fetch` API for communication with server
- Use `<form>` on login page

<small>\* login page could be rendered on server in favour of "save password" UX</small>

<small>\*\* responsive UI will be a huge :heavy_plus_sign: (but not mandatory)</small>

<small>\*\* article list/comments realtime updates will be a huge :heavy_plus_sign: (but not mandatory)</small>

#### Nested views example

![Nested views example screenshot](http://i.imgur.com/EFSVvTU.png)

- When user clicks on navigation – list view should update (with corresponding url change)
- When user clicks on item in list view - details view should update (with corresponding url change)

## Project structure suggestions

```
root
   dist/ -- ui resources after build --
   app/ -- all service related stuff
     models/
       User.js
       Article.js
       ...
     config/ -- configuration related stuff --
       routes.js
       passport.js
       ...
     controllers/ -- route handlers --
       users.js
       articles.js
       ...
   public/ -- all client side code should be in this folder --
     scripts/
       ...
     styles/
     index.html
  service.js
  package.json
  .gitignore
  .babelrc
  webpack.config.js
```
