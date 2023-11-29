## match-match-game. React implementation.

| Deadline         | Folder name            |
| ---------------- | ---------------------- |
| 23:59 29.07.2018 | react-match-match-game |

Rewrite [match-match-game](https://github.com/rolling-scopes-school/tasks/blob/2018-Q1/tasks/match-match-game.md) using react, redux and other tools you've learnt about on react-redux lectures.

Follow requirements described [here](https://github.com/rolling-scopes-school/tasks/blob/2018-Q1/tasks/match-match-game.md) with some exceptions:

- don't use localStorage for scoreboard data
- scoreboard data should be requested from API
- new score result should be sent to API where it will be saved

scoreboard is shared and everyone can add score result

API endpoints:

- GET http://mmg-score.herokuapp.com - get all results
- POST http://mmg-score.herokuapp.com - save single score result

POST body format:

```ts
{
  username: string;
  email: string;
  score: number;
}
```

response format:

```ts
{
  error: {
    code: number;
  } // zero code is no error
  result: any; // response data will be here, array of results or single result which is saved
  links: Array<Metalink>; // metalinks with available endpoints
  message: any; // response message
}
```

## Evaluation criteria: (0-100)

- MMG is fully rewritten using react only (0-50)
- redux is used (50-75)
  - action creators, constants, selectors
- redux middlewares are used (e.g thunk, logger), state is logiсaly splitted using combineReducers (75-85)
- react-router is used; hash, browser router is acceptable but browser router is preferable (85-100)
  - scoreboard, registration and other logical pages should have their own routes

### extra mile (optional) (100-120)

- reselect is used
- immutableJS is used
- simple tests are implemented
