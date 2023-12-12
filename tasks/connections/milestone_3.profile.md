## Milestone 3. Profile

**Score:** 40

Information on this page should be loaded **only once** when user visit this page first time.

### Visualization

Page with certain routing `/profile` should contain:

- user id
- email address
- human-readable profile creation time
- user name

### Endpoint

> `GET` https://tasks.app.rs.school/angular/profile

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Response

_status code_ **200**  
_json_ format

```json
{
  "email": {
    "S": "string" // user email
  },
  "name": {
    "S": "string" // user name
  },
  "uid": {
    "S": "string" // user id
  },
  "createdAt": {
    "S": "string" // unix timestamp in milliseconds when profile was created
  }
}
```

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

###### User is not found

_status code_ **400**

```json
{
  "type": "InvalidIDException",
  "message": "User was not found"
}
```

## Examination

### Profit

- `user id`, `email`, `creation time`, `user name` data of current user is displayed
  on the page: **30 points**
- error message with appropriate text are displayed on the page if loading http-request fails
  (for instance, if internet connection is lost): **10 points**

### Fines

- `/profile` http-request is sent every time if user opens profile page: **-15 points**
