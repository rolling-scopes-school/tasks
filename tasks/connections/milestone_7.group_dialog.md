## Milestone 7. Group dialog

**Score:** 140

Before user can send any message in the public dialog the channel should exist or has to be created
with `/groups/create` endpoint.

### Visualization

Page with dedicated routing `/group/{:groupID}` consist of:

**Return back link**  
It should be the link(!) to navigate to primary page.

**_Update_ button**  
Clicking on _Update_ button the application should send http-request, process the response and
display new messages if they are.

This button can be pressed once a minute and _Update_ button should be disabled (user cannot click
it)! Countdown is supposed to indicate how much time left. Countdown disappears when time is out.

> [!NOTE]
> Countdown(timer) and disabled _Update_ button (user cannot click it) is applied only after
> clicking on _Update_ button. First visit on the page should not have any effect on timer.

> [!NOTE]
> Countdown(timer) should display the actual number of seconds remaining until the end of one minute
> after the _Update_ button is pressed, even if the user navigates across pages. That is, if the user
> presses the _Update_ button, goes to other pages, and returns back to the list page after 58
> seconds, he should see the timer showing 2, 1, _(disappear)_

**_Delete_ button**  
Visible only for group owner.
Clicking on this button the group will be deleted and people will not be able to sent messages.

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

All received message data should be organized in a way that prevents loading of old(previous)
messages again if user navigates between pages and returns back to the channel until browser is
reloaded.

Corresponding endpoint can receive optional query parameter `since`.
If parameter is omitted - all messages are responded. That option should be when user visit group
first time.  
Every subsequent group update the `since` parameter supposed to be set to the last received message
unix time
and only new messages (after that time) will be responded. Application should get only new messages
and append them to the list.

### Endpoint

> `GET` https://tasks.app.rs.school/angular/groups/read?groupID={:groupID}&since={:since}

Retrieves messages of provided group.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request query

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `groupID` | `string` | unique group identifier                   |
| `since`   | `number` | (Optional) unix timestamp in milliseconds |

#### Response

_status code_ **200**  
_json_ format

```json
{
  "Count": "number",
  "Items": [
    {
      "authorID": {
        "S": "string" // id of the author of the message
      },
      "message": {
        "S": "string" // message text
      },
      "createdAt": {
        "S": "string" // unix timestamp when message was sent
      }
    }
    // ... other objects in the same format
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
  "message": "Group with id \"{groupID}\" does not exist or was removed before."
}
```

###### Group id parameter is wrong

_status code_ **400**

```json
{
  "type": "InvalidFormDataException",
  "message": "Validation of \"groupID\" parameter failed"
}
```

---

> `POST` https://tasks.app.rs.school/angular/groups/append

Sends new message into the group channel.

#### Request headers

| Header          | Type     | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `rs-uid`        | `string` | user identifier received after successful authentication                                  |
| `rs-email`      | `string` | user email                                                                                |
| `Authorization` | `string` | `Bearer <TOKEN>`, where `<TOKEN>` is token value received after successful authentication |

#### Request body

| Property  | Type     | Description           |
| --------- | -------- | --------------------- |
| `groupID` | `string` | group identifier      |
| `message` | `string` | personal message text |

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
  "message": "Post data should contain valid \"groupID\", \"message\" parameters."
}
```

###### Conversation is not ready to be used

_status code_ **400**

```json
{
  "type": "RoomReadyException",
  "message": "Group with id \"{groupID}\" seems not ready yet"
}
```

###### Group does not exist

_status code_ **400**

```json
{
  "type": "InvalidIDException",
  "message": "Group with id \"{groupID}\" does not exist or was removed before."
}
```

## Examination

### Profit

- the page is protected by a guard only for authorized user: **5 points**
- the error message is displayed if group with provided id does not exist: **10 points**
- _Return back_ is a link, not a button: **5 points**
- the full message history is loaded if user visit this page first time: **10 points**
- only the last messages (using `since` parameter) are loaded if user opens this group conversation
  again: **20 points**
- only the last messages (using `since` parameter) are loaded if user clicks on
  _Update_ button: **20 points**
- messages in corresponding area are sorted by time. New messages are appended at
  the bottom: **5 points**
- message item contains readable time, user name and text. Own messages are displayed on the right.
  Other messages are displayed on the left: **10 points**
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs): **10 points**
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active: **5 points**
- group is created by current user should contain _Delete_ button: **10 points**
- the confirmation modal appears after clicking on _Delete_ button with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and the user is redirected to main page after succeeded
  response: **10 points**
- form field has `required` validator. _Send new message_ button is disabled (user cannot click it)
  until field has text: **5 points**
- new messages are loaded (using `since` parameter) after successful sending
  new message: **15 points**

### Fines

- _Delete_ button is not present on the page for own group after hard page
  reloading(refreshing): **-20 points**
- while user is on this dialog page, he reloads the page and navigates to the main page.
  Http-request to `/groups/list` is sent more than once (if user do not click _Update_
  button): **-25 points**
- user can enter the page of existing dialog and see the messages even if he is
  not authorized: **-15 points**
