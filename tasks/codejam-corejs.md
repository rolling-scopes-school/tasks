# CodeJam-3 CoreJS

### Deadline: 28-10-2018 21:00

## Task
You have to implement 3 functions. Each function need to be placed in a *separate* file with title of the function name (for example **make.js**). As soon as you create a function, please commit the file. Implement another function and make the next commit etc. You can refactor and commit changes up until the deadline.    

When you finish the task, please fill this form with link to your Pull Request - 
https://docs.google.com/forms/d/e/1FAIpQLSdLn54O77NlrwH4Z5tViX0qMJGwdrpY--stBEdFpMH7E2rd0A/viewform

### Function #1 "sumOfOther".

Create function `sumOfOther` that takes an array as an argument, for example `[2, 3, 4, 1]` and returns `[8, 7, 6, 9]`. Input array is one-dimensional array of integers. Initial array can be any length. Output array consists of integers, where each element by index `i` is a sum of remaining elements from original array.   

### Function #2 "make".

Create function `make` that can be invoked the next way:   

```javascript
make(15)(34, 21, 666)(41)(sum); // return 777

function sum(a, b) {
    return a + b;
}

```
While passed argument is not a function you accumulate arguments value (possible methods are listed below), then you invoke function with the arguments on the principle of `Array.prototype.reduce` and return resulting value.   

Step | a    | b    | result
---- | ---- | ---- | ----
  0  |  15  |  34  |  49
  1  |  49  |  21  |  70
  2  |  70  |  666 |  736
  3  |  736 |  41  |  777

Use of global variables or accumulation of intermediate values in `make.smth` or `make.prototype` is forbidden.  

Methods:
* using closure  
* using partial application (google: "partial application javascript")
* using recursion (for geeks :smirk_cat:)

### Function #3 "recursion"
Create function `recursion` that takes as an argument *tree* represented as an object of the following structure:  
```
                     100
        90                             120
70         99                   110          130
```
```
let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]
```
and converts it into array of the form `[[100], [90, 120], [70,99,110,130]]`.  
You have to use recursion in your solution!   

### Requirements to the repository: 
1. You should create public repository `rsschool-codejam` on your GitHub account.  
2. `Master` branch has to include only one file - `readme.md`.  
3. Your solution (whole code) should be in branch `codejam-3`.   
4. When you finish the task, you should open Pull Request to master branch `codejam-3`->`master`.  

### Requirements to commits
- At least 3 commits
- You should follow the next guideline of the commit naming - https://www.conventionalcommits.org/en/v1.0.0-beta.2/ 
Basic requirements:  
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

### Requirements to the PR (Pull Request)
1. PR name should contain **task name** and probably additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like *.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

## Score criteria:  
- Function `sumOfOther` is implemented **+10 points**
- Function `make` is implemented **+20 points**
- Function `recursion` is implemented **+20 points**
- Requirements to repository, commits and PR are met **+20 points**
- The project includes file `package.json`, packages `eslint` and `eslint-config-airbnb-base`, code style meets the requirements of `eslint-config-airbnb-base` **+20 points**
- The project includes package https://mochajs.org/. Functions are covered by tests. **+20 points**
- All criteria are completed within 4 hours (until 28-10-2018 01:00) **+10 points**

## Who will review the task?
Your mentor.
