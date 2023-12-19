## Milestone 4. Profile updating

**Score:** 55

User can change and save his name. Application **should not** perform _get_ http-request `/profile`
again to retrieve saved data, if _put_ http-request succeed the data from the form is applied to
Profile page instantly.

### Visualization

The button _Edit_ should be present on the page. Clicking on the button field `name` becomes
editable, _Save_ button appears to save new data on the server via http-request, _Cancel_ button
appears to revert back state to static form without modifications.

_Save_ button is disabled (user cannot click it) or is not visible while http-request is sent and
other updating processes are in progress to prevent clicking the button multiple times in a row.  
_Cancel_ button is disabled (user cannot click it) or is not visible while http-request is sent and
other updating processes are in progress to prevent editing from being canceled if the updating
process is already running.

Form field `name` should obey the same validation rules as
on [Registration page](./milestone_1.registration.md).

### Endpoint

> `PUT` https://tasks.app.rs.school/angular/profile

Edit profile data of current user.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request body

| Property | Type     | Description   |
| -------- | -------- | ------------- |
| `name`   | `string` | new user name |

#### Response

_status code_ **201**

#### Exceptions

###### Have not passed valid Authorization header parameter

_status code_ **400**

```json
{
  "type": "InvalidTokenException",
  "message": "Header should contain \"Authorization\" parameter with Bearer code."
}
```

###### Sent form data is corrupted

_status code_ **400**

```json
{
  "type": "InvalidFormDataException",
  "message": "Invalid multipart/form-data request"
}
```

###### Format of form data is unknown or cannot be read

_status code_ **400**

```json
{
  "type": "InvalidFormDataException",
  "message": "Invalid post data"
}
```

###### Form data should contain required parameters

_status code_ **400**

```json
{
  "type": "InvalidFormDataException",
  "message": "You have to pass \"name\" field."
}
```

###### User cannot be found by passed parameters

_status code_ **400**

```json
{
  "type": "InvalidIDException",
  "message": "User was not found. Check passed identificators."
}
```

## Examination

### Profit

- button _Edit_ makes `name` field editable: **10 points**
- button _Cancel_ returns initial page state (static appearance): **5 points**
- clicking the button _Save_ sends 1 http-request to save new data without the ability to click it
  again (along with _Cancel_ button) until process is end: **20 points**
- buttons _Cancel_ and _Save_ are visible ony for editable form: **5 points**
- button _Edit_ is visible only for static page: **5 points**
- [toast messages](./README.md#toast) with appropriate text are displayed if http-request fails or
  succeed: **10 points**

### Fines

- http-request `/profile` to retrieve profile data is sent: **-20 points**
- edited data is applied to the static Profile page even if http-request fails: **-20 points**
