## Milestone 2. Login

**Score:** 70

If user with certain email was signed up, he can enter the system using login form.
It should be **default page** if user is not authenticated yet!

As a result of http-request application accept `token` and `uid` value to use it for further
http-requests.

> [!IMPORTANT]
> If authorization was made at other tab or other browser and new token was generated, the new token
> remains primary and old token will no longer valid!

Processing the successful response the value `token`, `uid` supposed to be persisted in browser's
local storage to use it in interceptors for all http-requests.

> User is considered as authorized if `token`, `uid` and `email` are persisted in `localStorage`.

Login page should be on specific routing `/signin`.

### Visualization

Page consist of:

**reactive form** with:

- email
- password

**submit button**  
Triggers the process of authorization. Any errors during the registration should be displayed to let
use know about the problem.

**link to [Sign-Up](./milestone_1.registration.md) page**  
If user does not have account yet.

### Endpoint

> `POST` https://tasks.app.rs.school/angular/login

#### Request body

| Parameter  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `email`    | `string` | email address of user  |
| `password` | `string` | authorization password |

#### Response

_status code_ **200**  
_json_ format

```json
{
  "token": "string",
  "uid": "string"
}
```

#### Exceptions

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
  "message": "Parameters \"email\" and \"password\" are required."
}
```

###### User is not found

_status code_ **400**

```json
{
  "type": "NotFoundException",
  "message": "Email and/or password doesn't exist in the system."
}
```

## Examination

_Submit_ word is just the name of the button, you can use whatever label for the button you want.

### Profit

- default page for unauthorized user: **10 points**
- validation for _email_ field with error messages: **5 points**
- validation for _password_ field with error messages: **5 points**
- redirection to the main page after successful authentication: **10 points**
- toast messages with appropriate text are displayed if http-request fails or succeed: **10 points**
- _Submit_ button is disabled if form is invalid. Also, it should be disabled after http error with
  type `NotFoundException` until the user changes `email` or `password` field value: **10 points**
- _Submit_ button is disabled after clicking until any http error is returned (http success is not
  considered because redirection into main page should be in that case): **10 points**
- `token`, `uid` and `email` value is saved in `localStorage` after successful sign in and used
  again in the following htt-requests even after page reloading (it allows user to omit login again
  after page reloading): **10 points**

### Fines

- redirection to sign-in page after failed registration: **-20 points**
- user can click _Submit_ button more than once even if previous http-request
  is not completed: **-20 points**
