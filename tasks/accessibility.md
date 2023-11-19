| Deadline         | Folder Name   | Coefficient |
| ---------------- | ------------- | ----------- |
| 03.11.2016 23:59 | accessibility | 0.6         |

Layout: your mark-up for widgets

General Requirements:

1. Use a screenreader to test the page. (NVDA is preferred);

2. Layout should be completely accessible via keyboard;

3. Easy access and navigation among the widgets (relevant only for screenreader users);

4. All elements on the page should be unambiguously recognized;

5. In cases when an element is a stub for js, you are allowed to use hidden-class with element description.

Requirements for some widgets:

Weather.

- When the slider gets focus the user should hear a message on how to switch to the next city (you don't have to make switching itself, obviously);

- When a picture in the slider is focused all info on a given city should be read (name, temperature and time).

Audioplayer

- When the play button is focused the user should be told which second an audio is going to start playing from;

- When the scroller gets focus the user should be told how to rewind the song forwards / backwards (you should imitate a situation when the music is paused).

Messages

- The "+"icon should start a chat with a new person;

- When the user moves focus to another person he should hear that person's name, status (their status can be made up depending on the color of the circle) and person's action (whether or not that person received a message and if person is typing at the moment). This info should be correctly displayed. Also, you should make it more logical using aria-live. However, since our widgets are not very dynamic yet, you don't have to do that. Instead you are allowed to show it simply as description on focus but do keep aria-live stuff in mind.

Widget with buttons

- When the scroller gets focus the user should be told that a certain value is set and instructed on how to modify it.
