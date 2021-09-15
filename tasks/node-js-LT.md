## 1. BASICS. NODEJS FUNDAMENTAL THEORY

### PREREQUISITES:
 1. Install the latest LTS (Long Term Support) version of [Node.js](https://nodejs.org/en/), by any available means (exe, nvm, brew, etc.).
 2. Check in the console (terminal) that the Node.js installation was done properly by running the following commands node –v or node --version.
 3. Create a repo for your homework tasks on your private [Github](https://github.com/)
 4. Provide your mentor with the link to the PR.
 5. Create package.json by running the following commands npm init or npm init –y.
 6. Install globally or locally npm package [nodemon](https://github.com/remy/nodemon) to dev dependency.
 
 ### TASK 1.1
  Write a program which reads a string from the standard input stdin, reverses it and then writes it to the standard output stdout.
   - The program should be started from npm script via nodemon (i.e. npm run task1).
   - The program should be running in a stand-by mode and should not be terminated after the first-string processing.
   - For example:
   ``` 
       12345 678 
       876 54321

       test data
       atad tset
   ```

### TASK 1.2
Write a program which should do the following:
- Read the content of csvfile from./csvdirectory. Example: https://epa.ms/nodejs19-hw1-ex1
- Use the [csvtojson package](https://github.com/Keyang/node-csvtojson) to convert csvfile to json object.
- Write the csvfile content to a new txtfile. Use the following format:
```typescript
{"book":"The Compound Effect","author":"Darren Hardy","price":9.48}
{"book":"The 7 Habits of Highly Effective People","author":"Stephen R. Covey","price":23.48}
{"book":"The Miracle Morning","author":"Hal Elrod","price":21.34}
{"book":"Influence: The Psychology of Persuasion","author":"Robert B. Cialdini","price":12.99}
{"book":"The ONE Thing","author":"Gary Keller","price":11.18}
```
- Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
- In case of read/write errors, log them in the console.
- The program should be started via npm script using nodemon (i.e. npm run task2)
   
### TASK 1.3
Rewrite the above-mentioned programs to use [babel](https://babeljs.io/) and ES6modules.

### EVALUATION CRITERIA (max 100 points)
- Task 1.1 is fulfilled to the full extent  **+10 points**
- Task 1.2 is fulfilled to the full extent; the file is loaded fully into the RAM **+20 point**
- Task 1.2 is fulfilled to the full extent; the file is not loaded fully in the RAM ([pipeline method](https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback)) **+30 points**
- All the tasks are fulfilled to the full extent (Task 1.1,Task 1.2,Task 1.3). **+40points**




## 2. IN MEMORY CRUD REST SERVICE WITH VALIDATION
### PREREQUISITES:
1. Install the latest LTS (Long Term Support) version of [Node.js](https://nodejs.org/en/), by any available means (.exe, nvm, brew, etc.)
2. Check in the console (terminal) that the Node.js installation was done properly by running the following commands node –v or node –version
3. Create a repo for your homework tasks on your private [Github](https://github.com/)
4. Provide your mentor with the link to the PR.
5. Create package.json by running the following commands npm init or npm init –y
6. Install globally or locally npm package [nodemon](https://github.com/remy/nodemon), configure [babel](https://babeljs.io/) and [eslint](https://eslint.org/). Use TypeScript, this will be a big plus.

### TASK 2.1
Write a simple REST service with CRUD operations for User entity.
- To create REST service, use [Express JS](https://expressjs.com/). The User should have the following properties (you can use UUID as a user identifier (id)):
```typescript
    type User = {
        id: string;
        login: string;
        password: string;
        age: number;
        isDeleted: boolean;
    }
```
- Service should have the following CRUD operations for User:
    + get user by id;
    + create and update user;
    + get auto-suggest list from limit users, sorted by login property and filtered by *loginSubstring* in the login property: *getAutoSuggestUsers*(loginSubstring, limit)
    + remove user (soft delete–user gets marked with isDeleted flag, but not removed from the collection).

- Store user’s collection in the service memory (while the service is running). To test the service CRUD methods, you can use [Postman](https://www.getpostman.com/)

### TASK 2.2
Add server-side validation for create/update operations of User entity:
- all fields are required;
- login validations required;
- password must contain letters and numbers;
- user’s age must be between 4 and 130.In case of any property does not meet the validation requirements or the field is absent, return 400 (Bad Request) and detailed error message. For requests validation use special packages like [joi](https://github.com/hapijs/joi), [express-joi-validation](https://www.npmjs.com/package/express-joi-validation)

### EVALUATION CRITERIA (max 100 points)
- Task 2.1 is partially implemented (w/o getAutoSuggestUsers or other methods); **+10 points**
- Task 2.1 is fulfilled to the full extent; **+20points**
- Task 2.1 eslint rules are applied; **+30 points**
- Task 2.2 is fulfilled to the full extent; validation package is used. **+40points**


 
## 3. LOGGING & ERROR HANDLING
### PREREQUISITES:
The task is a continuation of Task_2 and should be done in the same repo.

### TASK 3.1
Add express middleware which will log which service method has been invoked and which arguments have been passed to it.

### TASK 3.2
- Add express middleware which will log all unhandled errors and return a standard message with HTTP code 500 (Internal Server Error). Remark: Do not modify the status code and the message for other errors like validation errors from the previous task.
- Add error handling to process.on (*‘uncaughtException’*,...).
- Add Unhandled promise rejection listener to log errors.

### TASK 3.3
Every method in the controllers should log the errors which should include the following information:
- method name;
- arguments which have been passed to the method;
- error message.

### EVALUATION CRITERIA ( max 100 points + 50 points for the *task)
- Custom logger based on console.log is added instead of Logger package. **+10 points**
- Task 3.1 is fulfilled to the full extent; logs are written into the console **+20 points**
- Task 3.2 is fulfilled to the full extent, [Winston](https://github.com/winstonjs/winston) package is used for logging **+30 points**
- Task 3.3 is fulfilled to the full extent **+40 points**
- *Add middleware wrapper functions (or decorators) which will track the methods’ execution time. **+50 points**



## 4. JWT AUTHORIZATION AND CORS
### PREREQUISITES:
The task is a continuation of Task_3 should be done in the same repo.

### TASK 4.1
Add authorization to the already existing REST service.
- Add login(username, password) method which should return JWT token.
- Add middleware which will proxy all the requests (except login) and check that HTTP Authorization header has the correct value of JWT token.
- In case the HTTP Authorization header is absent in the request, the middleware should stop further controller method execution and return HTTP 401 code (Unauthorized Error) and standard error message.
- In case of HTTP Authorization header has invalid JWT token in the request, the middleware should return HTTP code 403 (Forbidden Error) and standard error message.

### TASK 4.2
Add CORS middleware to access service methods from Web Applications hosted on other [domains](https://github.com/expressjs/cors)

### EVALUATION CRITERIA (max 100 points)
- Task 4.1 is implemented partially; login method is added and JWT token is generated **+10 points**
- Task 4.1 is implemented partially; JWT token checking method is implemented **+20 points**
- Task 4.1 is fulfilled to the full extent; authorization working using middleware **+30 points**
- Task 4.2 is fulfilled to the full extent. **+40 points**
