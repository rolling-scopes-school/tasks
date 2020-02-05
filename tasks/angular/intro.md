| Deadline         |
|------------------|
| 23:59 13.02.2020 |

# YouTube client app
During the Angular course, you are to implement the YouTube client app. You can refer to the [Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

For further implementation create a new private repository named *youtube-client* on **your** GitHub account.
Please add the following trainers to the collaborators list:
- https://github.com/pavelrazuvalau
- https://github.com/Pulya10c

## Angular. Intro task

### Getting started
- Install *@angular/cli* package. It's highly recommended to use *SCSS* as the default stylesheet
- Use ng-cli to create a new project
- Explore the generated project structure

### Task requirements
Within this task you are to start implementing the main page of the app.

**[YouTube client. Main page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)**

#### Project structure
The project structure can be organized in the following way:

```
    app
    ├── components                
    │   ├── header
    │   ├── search-results
    │   ├── search-item
    │   ...
    ├── models
    |   |── search-response.model.ts
    │   ├── search-item.model.ts
    │   ...
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.ts
    ├── app.component.spec.ts
    ├── app.module.ts
    ...
```

#### Task scope
- Generate a new Angular project using ng-cli
- Configure TSLint with the following file:
**[tslint.json](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/tslint.json)**
- Think how to break down the whole app into smaller pieces.
- Generate all the necessary components using ng-cli. The search result list and each item should be represented as separate components
- Based on the mocked response which is stored in .json file, create necessary interfaces
*[YouTube client. Response example](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)*
- Once you finish the task, provide the link to your repository via submitting the *[form](https://docs.google.com/forms/d/e/1FAIpQLSfJimto2jNt6XWsgxJII0dDo22XvWDwzQyO6TSY_ZuUT4--Fg/viewform)*

Please bear in mind that you don’t need to implement any logic or markup. The outcome of this task should contain only newly generated and empty components.

#### Evaluation criteria
Maximum points - **50**

- [ ] The app is generated (**+5**)
- [ ] Added base project structure for components and models. TSLint is configured with the file provided in the task description (**+10**)
- [ ] All the necessary components were created (**+15**)
- [ ] All the necessary models were created. Search result list and search item components contain declaration of necessary fields (**+20**)

Fines
- [ ] Failure to submit on time may lead to points loose according to the [Stage #2 requirements](https://docs.rs.school/#/stage2?id=%d0%94%d0%b5%d0%b4%d0%bb%d0%b0%d0%b9%d0%bd%d1%8b)
- [ ] The app doesn't work or has console errors (**-20**)
- [ ] TSLint warnings or errors are present (**-15**)

### Useful links
https://www.typescriptlang.org/docs/home.html

https://www.typescriptlang.org/docs/handbook/basic-types.html

https://www.typescriptlang.org/play/index.html

https://cli.angular.io

https://angular.io/cli

https://angular.io/tutorial
