**Overview**
 - Your task is to implement a UI for a chat.
 - Design is up to you. 

**All your code must be in the school’s private repository:**
- Create new branch named chat;
- Make a Pull request from the chat branch to the master branch.

# General requirements
* Connection should be [WS](https://developer.mozilla.org/en-US/docs/Glossary/WebSockets) based.  
* You should use _ws://chat.shas.tel_ ( or ws://chat.shas.tel) as connection url.

You always will receive an array of messages from the server - when you first connect and when somebody (including you) sends a message to the server.

# Front-to-back communication
A message that you send to the server should strictly follow protocol:

```js
{
  from: String,
  message: String,
}
```
# Back-to-front communication

You always will receive an array of messages from the server (when you first connected, and when somebody (includes you) send some message to the server.

A message that you receive from server strictly follow protocol:
```js
[{
  from: String,
  message: String,
  id: String, // unique id of the message
  time: Number, // time when the message has been received
},]
```
Note, that you can receive more than 1 message in Array (up to 100).  

**Requirements:**
* React/Redux
* Nickname should be stored in [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and reused across app launches.
* You should implement reconnection mechanism
* Add notifications for new messages
* Display notification **_only_** when app is **not visible**
* You should separately handle cases when the app goes online/offline
* App should properly work in latest stable chrome
* Your implementation of chat should be deployed and available anywhere by a public link. (My recommend hosting is [heroku](https://www.heroku.com/)). Please add a link to the deployed app to the PR.

Please do not treat this as a regular task it is more like 'test task' for your interview.
Apply all knowledge that you gathered during the course, use any technology you think you should, it fully ok unless you can't reason why you use it.

You will be able to chat with other students and trainers, so please be nice ☺️.

It will be mandatory for an interviewer to check your PR and discuss your task during the interview session.
