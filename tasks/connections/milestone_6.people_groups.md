## Milestone 6. People & Groups

**Score:** 175

The **default page** for authorized user should be the one without extra path (root routing).
Page is split into 2 vertical sections.
Left side is [Group section](#milestone-61-group-list).
Right side is [People section](#milestone-62-people-list).

> [!WARNING]
> Please, do not use any timers or intervals to update Group or People list! Only manual triggers
> are allowed.

## Milestone 6.1. Group list

**Score:** 100

Each of users can observe all available groups to broadcast messages. There is no private groups!
Also, user can create new one that will be visible for all other users.

### Visualization

Left half of the primary page consist of:

**_Update_ button**  
_Update_ button refreshes the group list by sending http-request and renders obtained list.

User can update the list no more than once a minute! Countdown must be present near the _Update_
button till the next update is possible. If time is out countdown disappears.
This state should be preserved even after transition to other pages and back.

**_Create_ button**  
_Create_ button opens modal window with a reactive form where user can enter `name`. Using
endpoint (below) application creates new group and append it into the list **without** retrieving
all group list with http-request again.

Form validation:

- `name` is not more than 30 symbols;
- `name` contains only letters, digits or spaces;

**List of groups**  
Simple list with **clickable items as a link** and extra delete button at the right of the name for
the groups were created by current user.

Clicking on item user is redirected to dedicated page with routing `/group/{:groupID}`

Confirmation modal window appears after clicking on delete group icon. If confirmation was accepted
using http-request the group is deleted and group is being removed from the list **without**
obtaining all group list with http-request again.

_rough example of group list_:  
`---------------------------------`  
`|` Someone's Group name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`---------------------------------`  
`|` My Group
name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10006; `|`  
`---------------------------------`  
`|` Someone's Group name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`---------------------------------`

### Endpoint

> `GET` https://tasks.app.rs.school/angular/groups/list

Retrieves list of available groups which can be used to broadcast messages.

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
  "Count": "number",
  "Items": [
    {
      "id": {
        "S": "string"
      },
      "name": {
        "S": "string"
      },
      "createdAt": {
        "S": "string" // unix timestamp
      },
      "createdBy": {
        "S": "string"
      }
    }
    // ... another object in the same format
  ]
}
```

#### Exception

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

---

> `POST` https://tasks.app.rs.school/angular/groups/create

Creates new group with specific name. Owner will be able to delete created group.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request body

| Property | Type     | Description    |
| -------- | -------- | -------------- |
| `name`   | `string` | new group name |

#### Response

_status code_ **201**  
_json_ format

```json
{
  "groupID": "y5kse1rcgh"
}
```

#### Exception

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
  "message": "Parameter \"name\" should define conversation name."
}
```

---

> `DELETE` https://tasks.app.rs.school/angular/groups/delete?groupID={:groupID}

Deletes group by owner.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request query

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| `groupID` | `string` | unique group identifier |

#### Response

_status code_ **200**

#### Exception

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

###### Query string should contain required parameters

_status code_ **400**

```json
{
  "type": "InvalidFormDataException",
  "message": "\"groupID\" parameter should be in query list."
}
```

###### Group does not exist

_status code_ **400**

```json
{
  "type": "InvalidIDException",
  "message": "Group with id \"${groupID}\" does not exist or was removed before."
}
```

## Milestone 6.2. People list

**Score:** 60

User can observe all list of registered participants and make the individual conversation with any
of them.

There are 2 endpoints:

_/users_  
Retrieves list of all registered is the system participants. This list should be rendered excluding
yourself.

_/conversations/list_  
Retrieves list of active individual conversations with unique id. This list used to mark list items
with special color and not to re-create already existing conversation.

### Visualization

Right half of the primary page consist of:

**_Update_ button**  
_Update_ button refreshes the people list by sending http-request and renders obtained list.

User can update the list no more than once a minute! Countdown must be present near the _Update_
button till the next update is possible. If time is out countdown disappears.
This state should be preserved even after transition to other pages and countdown

**List of people**  
Simple list with **clickable items as a link** of all members. If user has the conversation with
someone
created earlier, its list item should have different background light color.

Clicking on item user is redirected to dedicated page with
routing `/conversation/{:conversationID}`.

> [!WARNING] Technically application should create
> conversation via special http-request (below) before user is redirected to the dialog page if
> there is no
> already created conversation with unique id. If any errors occur during conversation creation user
> have to see toast danger message and redirection is
> canceled.

_rough example of people list_:  
`-----------------------`  
`|`
Sofía&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`-----------------------`  
`|`
Nicolás&nbsp;&nbsp;`********`&nbsp; `|`  
`-----------------------`  
`|`
Mateo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`-----------------------`

### Endpoint

> `GET` https://tasks.app.rs.school/angular/users

Retrieves list of participants.

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
  "Count": "number",
  "Items": [
    {
      "name": {
        "S": "string"
      },
      "uid": {
        "S": "string"
      }
    }
    // ... another object in the same format
  ]
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

---

> `GET` https://tasks.app.rs.school/angular/conversations/list

Retrieves list of active conversations of current user.

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
  "Count": "number",
  "Items": [
    {
      "id": {
        "S": "string"
      },
      "companionID": {
        "S": "string"
      }
    }
    // ... another object in the same format
  ]
}
```

#### Exception

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

## Examination

### Profit

- default page for authorized user: **10 points**
- page is divided on 2 vertical sections with independent content: **5 points**

#### Group section (left)

- the list of available groups is loaded if user opens this page first time: **5 points**
- the list item created by current user should contain _Delete_ button: **10 points**
- the confirmation modal appears after clicking on _Delete_ button on list item with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and item is removed from the list after succeeded response: **15 points**
- clicking on _Update_ button sends corresponding http-request and update group
  list if succeeded: **10 points**
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): **10 points**
- _Update_ button is disabled after clicking during updating and until the timer
  is active: **5 points**
- clicking on _Create_ button the modal window is opened. There is reactive form with validation and
  submit button: **10 points**
- submit button in modal window should be disabled until form is valid: **5 points**
- clicking on submit button in modal window the appropriate http-request is sent to create new
  group. Modal window is closed only if http-request succeeded: **15 points**
- error messages are displayed if any http-request fails: **10 points**
- clicking on list item the user is redirected to group dialog page: **5 points**

#### People list (right)

- the list of people is loaded if user opens this page first time: **10 points**
- the list item with which current user already has active conversation has
  special background: **10 points**
- clicking on _Update_ button sends corresponding http-request and update people list
  if succeeded: **10 points**
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): **10 points**
- _Update_ button is disabled after clicking during updating and until the
  timer is active: **5 points**
- clicking on list item the user is redirected to personal conversation page. New conversation (via
  certain http-request) is created if it has not already created before transition: **15 points**

### Fines

#### Group section

- list of groups is loaded every time if user returns back into main page: **-40 points**
- list of groups is loaded after successful created new group or deleted group: **-40 points**
