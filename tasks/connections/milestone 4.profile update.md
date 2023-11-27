## Milestone 4. Profile updating

**Score:** 110

User can change and save his name. Application **should not** perform _get_ http-request `/profile`
again to retrieve saved data, if _put_ http-request succeed the data from the form is being
persisted in store and is used on Profile page instantly.

### Visualization

The button _Edit_ should be present on the page. Clicking on the button field `name` becomes
editable, _Save_ button appears to save new data on the server via http-request, _Cancel_ button
appears to revert back state to static form without modifications.

Form field `name` should obey the same validation rules as on Registration page.

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

- button _Edit_ makes `name` field editable: **20 points**
- button _Cancel_ returns initial state: **10 points**
- button _Save_ (via @ngrx/effects) sends new http-request to save
  new data and update store: **40 points**
- buttons _Cancel_ and _Save_ is visible ony for editable
  form: **10 points**
- button _Edit_ is visible only for static page: **10 points**
- error messages are displayed if http-request fails: **20 points**

### Fines

- http-request to retrieve profile data is sent: **-25 points**
- data in the store is updated even if http-request fails: **-30 points**
