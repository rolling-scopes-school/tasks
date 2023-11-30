## Milestone 1. Registration

**Score:** 60

Before user be accessed it should be saved in the system.
Registration page should be on specific routing `/signup`.

User have to be redirected to the [Sign-In](./milestone_2.login.md) page after successful registration.

### Visualization

Page consist of:

**reactive form** with:

- first name field; It could be any of letters or spaces;
- email field. With validation for the email type;
- password field. With validation: minimum 8 symbols that include at least 1 capital letter, at
  least 1 digit and at least 1 special symbol.

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

_Submit_ word is just the name of the button, you can use whatever label for the button you want.

### Profit

- page with dedicated url: **5 points**
- validation for _name_ field with error messages: **5 points**
- validation for _password_ field with error messages: **5 points**
- redirection to sign-in page after successful registration: **5 points**
- toast messages with appropriate text are displayed if http-request fails or succeed: **10 points**
- _Submit_ button is disabled if form is invalid. Also, it should be disabled after http error with
  type `PrimaryDuplicationException` until the user changes the field value: **10 points**
- _Submit_ button is disabled and `email` field has error message of taken account if user type the
  same email address that he tried to send before and got
  an error `PrimaryDuplicationException`: **10 points**
- _Submit_ button is disabled after clicking until any http error is returned (http success is not
  considered because redirection into login page should be in that case): **10 points**

### Fines

- redirection to sign-in page after failed registration: **-20 points**
- user can click _Submit_ button more than once even if previous http-request
  is not completed: **-20 points**
