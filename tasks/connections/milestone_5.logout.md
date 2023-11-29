## Milestone 5. Logout

**Score:** 40

User can terminate current session. Successful sign out process removes token for
http-request and application should wipe out all relative browser
data (`localStorage` | `sessionStorage` | `cookies`).

If action succeed user supposed to be redirected into [Login page](./milestone_2.login.md).

### Visualization

Special button `Logout` should be places on the [Profile page](#milestone-3-profile) in the top
right corner.
Button can be pressed once and button should be disabled until previous http-request is completed.

### Endpoint

> `DELETE` https://tasks.app.rs.school/angular/logout

Removes session data for the user.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Response

_status code_ **200**

#### Exceptions

###### Have not passed required headers in http-request

_status code_ **400**

```json
{
  "type": "InvalidUserDataException",
  "message": "Header should contain \"rs-uid\", \"rs-email\" and \"Authorization\" parameters."
}
```

###### Have not passed valid Authorization header parameter

_status code_ **400**

```json
{
  "type": "InvalidTokenException",
  "message": "Header should contain \"Authorization\" parameter with Bearer code."
}
```

###### Passed token is invalid

_status code_ **400**

```json
{
  "type": "InvalidTokenException",
  "message": "Current session token is not valid."
}
```

## Examination

### Profit

- clicking on `Logout` button the http-request is sent
  with `DELETE` method: **10 points**
- user is redirected to Sign-In page after successful logout process: **10 points**
- all data in `cookies`, `localStorage` is deleted: **10 points**
- error messages are displayed if http-request fails: **10 points**
