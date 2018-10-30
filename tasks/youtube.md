# YouTube client

### Task:
The task is to create a web app to view information about youtube clips by user request.
YouTube REST API should be accessed via cross-domain XHR requests.

### Use case:
1. Search box is viewed by the user when he starts the app.
2. The user inputs a request in the search box. e.g. - javascript  
3. The app processes the request to YouTube REST API and displays loaded clips in form of horisontal list.
4. The horisontal list can be scrolled with a swipe (on a desktop via mouse swipe). Swipe should be animated, e.g. user can click and pull the list sidewise. Paging event should be triggered when mouseUp is released. If a user makes X quick swipes the app should list X pages. The number of clips on a page depends on the page size (from 1 to 4 clips per page).      
5. The additional navigation buttons (paging control) are set on the bottom of the page.  
6. As listing the pages, the app should load new date by chunks ( 15 clips per chunk). It would be good to manage "smooth" data loading which means preloading data chunks in advance to emulate infinite scrolling experience.

### Requirements
1. Perfect for latest Chrome;
2. Support at least one mobile platform (e.g. iOS / Android / WP);
3. Clips (aka components) are listed pagely. Resizing the page increases/decreases the number of clips on a page. After a resize event the first left clip from previous state should presented on a new state (but its position can be different). The futher resizing would take into account the first left component from the new state.
4. During a mousedown event on a paging component the tooltip with page number should popup.
5. Your complete app should be uploaded to github pages (gh-pages branch) or to any other hosting.
6. Each clip-component should provide for information about a single YouTube clip. Minimal info:
    - title (clickable link to YouTube)
    - clip preview as a picture
    - description
    - author
    - publication date
    - view rate (count)

    Showing the other information is optional.
    
### Samples of YouTube REST API requests:
    - https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js
    - https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics
    - How to get API key - https://www.youtube.com/watch?v=JbWnRhHfTDA
    - More detailed manual is here - https://developers.google.com/youtube/v3/

### UI Examples:
#### Default view:
![](https://i.imgur.com/W7CTv9X.png)

#### Resize
![](https://i.imgur.com/U5QX7cA.png)

#### Mobile version
![](https://i.imgur.com/MIFv1sV.png)
    
## Source code requirements 
- HTML rendering via JavaScript (a page is loaded without html tags inside document.body);
- CSS preprocessors can be used; 
- CSS3 Animations with Transitions & Transforms;
- Use of jQuery and other frameworks and libs **is forbidden** (except for https://lodash.com/);
- `.editorconfig` is required
- `eslint` is required
- `eslint-config-airbnb-base` is required
-  JS code should be splitted in modules and assembled by Webpack. Usage of babel and babel-loader is required. 

## Repository Guideline
1. Private repository
2. Branch name `youtube-client`.
3. Once a task is completed, please open a pull request `youtube-client`->`master`
4. Assign PR to you mentor 

## Commit Message Guideline
- At least 7 commits
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/ ) format
- Subject line requirements:
```
  * Allowed Types:
    * docs: - *documentation only changes*
    * feat: - *a new feature*
    * fix: - *a bug fix*
    * perf: - *a code change that improves performance*
    * refactor: - *a code change that neither fixes a bug nor adds a feature*
    * style: - *сhanges that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)*
    * ...
  * Use the present tense ("add feature" not "added feature")
  * Use the imperative mood ("move cursor to..." not "moves cursor to...")
  * Limit the first line to 72 characters or less
  * Reference issues and pull requests liberally after the first line
```
## Pull Request Guideline
1. PR name should contains **the task name** and probably additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like *.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

## Score calcualtion
- Repository Guideline violation **-25 point**
- Commit Message Guideline violation **-25 point**
- Pull Request Guideline violation **-25 point**
- `eslint-config-airbnb-base` errors or warnings **-25 point**
- animation is not smooth **-30 point** 
- reasonable amount of unit-tests **+30 points**
- functional requirements are met **+100 point**

