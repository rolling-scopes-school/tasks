## Milestone 8. Person conversation

**Score:** 140

Before user can send any message to other participant the conversation have to be created.

### Visualization

Page with dedicated routing `/conversation/{:conversationID}` consist of:

**Return back link**  
It should be the link(!) to navigate to primary page.

**_Update_ button**  
Clicking on _Update_ button the application should send http-request, process the response and
display new messages if they are.

This button can be pressed once a minute and _Update_ button should be disabled! Countdown is
supposed to indicate how much time left. Countdown disappears when time is out.

**_Delete_ button**  
Clicking on this button the conversation will be deleted and the partner will not be able to sent
messages until conversation is created again. All messages are being deleted.

**Area with messages**  
Section displays all messages. Own messages should be on the right side. The messages from other
people should be aligned to the left side.

Each message item with your appearance is supposed to consist of:

- date/time the message was created
- user name
- message text

`-----------------------------`  
`|` 2023/10/17 3:54
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`|` John
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`|` My new message
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `|`  
`-----------------------------`  
`|` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
2023/10/17 5:18 `|`  
`|`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Me `|`  
`|` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My new
message `|`  
`-----------------------------`

**Form field for new message**  
Simple form field with _text_ type for new message + _Send_ button to trigger process.

### Technical solution

All received message data should be saved in the NgRx store in some way in order to not load ald
messages again if user navigates between pages and returns back to the conversation until browser is
reloaded.

Corresponding endpoint can receive optional query parameter `since`.
If parameter is omitted - all messages are responded. That option should be when user open
conversation first time.  
Every subsequent conversation update the `since` parameter supposed to be set to the last received
message unix time
and only new messages (after that time) will be responded. Application should get only new messages
and append them to the list.

### Endpoint

> `GET` https://tasks.app.rs.school/angular/conversations/read?conversationID=46f6aq96dzs&since=1699833375896

Received messages of provided conversation.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request query

| Parameter        | Type     | Description                               |
| ---------------- | -------- | ----------------------------------------- |
| `conversationID` | `string` | unique conversation identifier            |
| `since`          | `number` | (Optional) unix timestamp in milliseconds |

#### Response

_status code_ **200**  
_json_ format

```json
{
  "Count": "number",
  "Items": [
    {
      "authorID": {
        "S": "string"
      },
      "message": {
        "S": "string"
      },
      "createdAt": {
        "S": "string" // unix timestamp
      }
    }
    // ... other objects in the same format
  ]
}
```

### Exception

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
  "message": "\"conversationID\" parameter should be in query list."
}
```

###### Conversation does not exist

_status code_ **400**

```json
{
  "type": "InvalidIDException",
  "message": "Conversation with id \"{conversationID}\" does not exist or was deleted before."
}
```

---

> `POST` https://tasks.app.rs.school/angular/conversations/append

Sends new message to the partner.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request body

| Property         | Type     | Description             |
| ---------------- | -------- | ----------------------- |
| `conversationID` | `string` | conversation identifier |
| `message`        | `string` | personal message text   |

#### Response

_status code_ **201**

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
  "type": "InvalidPostData",
  "message": "Post data should contain valid \"conversationID\", \"message\" parameters."
}
```

###### Conversation does not exist

_status code_ **400**

```json
{
  "type": "InvalidIDException",
  "message": "Conversation with id \"{conversationID}\" does not exist or was deleted before."
}
```

## Examination

### Profit

- the page is protected by a guard only for authorized user: **5 points**
- the error message is displayed if conversation with provided id does not exist: **10 points**
- _Return back_ is a link, not a button: **5 points**
- the full message history is loaded if user visit this page first time: **10 points**
- only the last messages (using `since` parameter) are loaded if user opens this group conversation
  again: **25 points**
- only the last messages (using `since` parameter) are loaded if user clicks on
  _Update_ button: **25 points**
- messages in corresponding area are sorted by time. New messages are appended at
  the bottom: **5 points**
- message item contains readable time, user name and text. Own messages are displayed on the right.
  Other messages are displayed on the left: **10 points**
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): **10 points**
- _Update_ button is disabled after clicking during updating and until the
  timer is active: **5 points**
- the confirmation modal appears after clicking on _Delete_ button with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and the user is redirected to main page after succeeded
  response: **10 points**
- form field has `required` validator. _Send_ new message button is disabled until field
  has text: **5 points**
- new messages are loaded (using `since` parameter) after successful sending new message
  with @ngrx/effects by user: **15 points**
