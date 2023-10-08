
# YouTube client app

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. Forms

### Task requirements
The main goal of this task is to implement forms handling and validation using Reactive Forms functionality.

#### Functional requirements
- **Login block**

    ![Login](./login.jpg)

    - implement login form using Reactive Forms functionality
    - add validation rules for input fields:
        - login
            - required (message: "Please enter a login email")
            - valid email (message: "The login email is invalid")
        - password
            - required (message: "Please enter a password")
            - add a custom validator that will check how strong a password is. the following checks should be applied (message: "Your password isn't strong enough" + recommendations below):
                - at least 8 characters
                - a mixture of both uppercase and lowercase letters
                - a mixture of letters and numbers
                - inclusion of at least one special character, e.g., ! @ # ? ]

- **Admin page**

    ![Admin](./admin.jpg)

    - implement card creation form using Reactive Forms functionality
    - add validation rules for input fields:
        - title
            - required (message: "Please enter a title")
            - min length: 3 (message: "The title is too short")
            - max length: 20 (message: "The title is too long")
        - description
            - optional
            - max length: 255 (message: "The description is too long")
        - link to the image cover
            - required (message: "Please enter a link to the image")
            - check for the URL validity (message: "The image link is invalid")
        - link to the video
            - required (message: "Please enter a link to the video")
            - check for the URL validity (message: "The video link is invalid")
        - creation date
            - required (message: "Please enter a creation date")
            - an entered date should not be in the future (message: "The date is invalid")

- The application should prevent a user from submitting a form in case one of the described rules is failed
- In case a user has entered invalid data into an input, the border should be colored in red
- To indicate which rule fails, an appropriate message under an invalid input field should be displayed.

#### Evaluation criteria
Maximum score - **100**

- [ ] **Login block** is implemented as reactive form (**+10**)
- [ ] Validation rules are applied to the **Login block**. The form submission is possible only if a user enters valid data to all inputs (**+20**)
- [ ] The application indicated which inputs are invalid on the **Login block** by applying appropriate style and showing corresponding message (**+20**)
- [ ] **Admin page** is implemented as reactive form (**+10**)
- [ ] Validation rules are applied to the **Admin page**. The form submission is possible only if a user enters valid data to all inputs (**+20**)
- [ ] The application indicated which inputs are invalid on the **Admin page** by applying appropriate style and showing corresponding message (**+20**)

Fines
- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements](https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app doesn't work or has console errors (**-20**)
- [ ] ESLint warnings or errors are present (**-15**)

### Useful links
https://angular.io/start/forms

https://angular.io/guide/reactive-forms

https://angular.io/guide/forms

https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/
