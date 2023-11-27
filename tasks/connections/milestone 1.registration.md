## Milestone 1. Registration

**Score:** 120

Before user be accessed it should be saved in the system.
Registration page should be on specific routing `/signup`.

User have to be redirected to the [Sign-In](./milestone%202.login.md) page after successful registration.

### Visualization

Page consist of:

**reactive form** with:

- first name field; It could be any of letters or spaces;
- email field. With validation for the email type;
- password field. With validation: minimum 8 symbols, 1 capital letter, 1 digit and 1 special
  symbol.

**submit button**  
Triggers the process of registration. Any errors during the registration should be displayed to let
use know about the problem.

**link to Sign In page**  
If user already have an account he is able to login.

### Endpoint

> `POST` https://tasks.app.rs.school/angular/registration

#### Request body

| Parameter  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `email`    | `string` | email address of user  |
| `name`     | `string` | first name             |
| `password` | `string` | authorization password |

#### Response

_status code_ **201**

#### Exception

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
  "message": "Parameters \"email\", \"name\" and \"password\" are required"
}
```

###### User already exists in the platform

_status code_ **400**

```json
{
  "type": "PrimaryDuplicationException",
  "message": "User {email} already exists"
}
```

## Examination

### Profit

- page with dedicated url: **10 points**
- validation for _name_ field with error messages: **15 points**
- validation for _password_ field with error messages: **15 points**
- redirection to sign-in page after successful registration: **15 points**
- error messages for failed http-request is shown: **40 points**
- created and used dedicated @ngrx/effects for authorization processes: **25 points**

### Fines

- redirection to sign-in page after failed registration: **-25 points**
