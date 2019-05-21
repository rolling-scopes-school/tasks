# YouTube client

### Task:
The task is to create a web app to view the information about youtube clips on user request.
YouTube REST API should be accessed via cross-domain XHR requests.

### Use case:
1. User sees a search box as he starts up the app.
2. The user inputs a request in the search box. e.g. - javascript  
3. The app processes the request to YouTube REST API and displays loaded clips as a horizontal list of items.
4. The horizontal list can be scrolled with a swipe (on a desktop via mouse swipe). Swipe should be animated, e.g. user can click and pull the list sideways. Paging event should be triggered when mouseUp is released. If a user makes X quick swipes the app should list X pages. The number of clips on the page depends on its size (1 to 4 clips per page).      
5. The additional navigation buttons (paging control) are set at the bottom of the page.  
6. As the app lists the pages it should load new data in chunks ( 15 clips per chunk). It would be good to manage "smooth" data loading which means preloading data chunks in advance to emulate infinite scrolling experience.

### Requirements
1. Perfect for latest Chrome;
2. Support at least one mobile browser(e.g. iOS / Android / WP);
3. Clips (aka components) are listed pagely. Resizing the page increases/decreases the number of clips on a page. After a resize event the first left clip from the previous state should be present in the new state (but its position can be different). The further resizing would take into the account the first left component from the new state.
4. During a mousedown event on a paging component the tooltip with page number should pop-up.
5. Your complete app should be uploaded to github pages (gh-pages branch) or to any other hosting.
6. Each clip-component should provide the following information about a single YouTube clip:
    - title (includes a clickable link to YouTube)
    - clip preview as a picture
    - video description
    - author (channel name)
    - upload date
    - view count

    Showing any other information is optional.
    
### Samples of YouTube REST API requests:
    - https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js
    - https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics
    - How to get an API key - https://www.youtube.com/watch?v=JbWnRhHfTDA
    - You can find a more detailed documenation here - https://developers.google.com/youtube/v3/

### UI Examples:
#### Default view:
![](https://i.imgur.com/W7CTv9X.png)

#### Resized window
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
-  JS code should be split into modules and assembled by Webpack. Usage of babel and babel-loader is required. 

## Repository Guidelines
1. You work in your private repository
2. Branch name - `youtube-client`.
3. Once the task is completed, please open a pull request `youtube-client`->`master`
4. Assign the PR to you mentor 

## Commit Message Guidelines
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
## Pull Request Guidelines
1. PR name should contain **the task name** and probably some additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like *.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are a good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

## Score calculation
- Repository Guidelines violation **-25 points**
- Commit Message Guidelines violation **-25 points**
- Pull Request Guidelines violation **-25 points**
- `eslint-config-airbnb-base` errors or warnings **-25 points**
- Animation is not smooth **-30 points** 
- The following ES6+ features were used - promises, destructuring assignment, classes **+10 points**
- Reasonable amount of unit-tests **+30 points**
- Functional requirements are met **+100 points**

