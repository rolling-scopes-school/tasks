Our customers are too rushing for time making big plans of launching a new flight booking application, so they called for a helping hand. Since they’re too busy with pre-sales activities, some of the features that they want to see could be missing. They’re hoping for your expert help and suggestions, so you’re free to enhance the app by implementing your features to improve the user experience.

Luckily, they provided us with designs for reference:

<https://www.figma.com/file/7wKT7HgXxwzQVHxfLfgH0C/Airways>

## Background

The app called Airways - it’s an online platform designed to help users find and book flights quickly and easily. The app enables users to search for flights by selecting their desired destination, the number and age of passengers, dates, and the type of flight - one-way or round-trip.

Upon providing this information, the system displays all the available dates and prices, along with the available amount of seats. This enables users to compare and select the best options that match their preferences and budget.

To facilitate the booking process, users select their desired dates and are prompted to enter the passenger information and select baggage options. Once the booking is complete, users can access it from their user account page, making it easy to manage their travel arrangements.

The app also offers personalization settings like date and currency format, allowing users to customize their experience according to their preferences.

## Functional features

- User Registration: The app should have a user registration feature that requires users to create an account to book a flight. This will allow the platform to capture user information and preserve all the bookings made previously.

- Personalization Settings: The app should offer personalization settings, such as the date and currency format, to allow users to customize their experience according to their preferences.

- Flight Search (Main) Page: The app should provide users with a simple and intuitive flight search functionality. This should include options to select the destination, type of flight (one-way or round-trip), and the number and age of passengers.

- Flight Selection Page: Once the user has entered their search criteria, the app should display all available flights along with the dates, prices, and the available number of seats. This will help the user to choose the most suitable option.

- Booking Process Page: After selecting a flight, the user will be taken to another page where they can provide passenger data, baggage options, contact information, and payment details to complete the booking. Once a user has provided booking details, he’ll see the summary with all the flight information provided.

- Booking Summary Page: This shows all the data provided before checkout. We can process the payment now, or add it to the shopping cart for later.

- Shopping Cart Page: Consists of previously added bookings that are awaiting payment.

- User Account Page: All bookings made by the user should be accessible from their account page. This should include the ability to view, modify, and cancel bookings as well as track their travel history.

## Technical requirements

The maximum number of available points for the task evaluation is 700

### Page layout (+150)

General Requirements:

- The web app must be responsive, i.e., it should adapt to various screen sizes and resolutions, such as desktops, laptops, tablets, and smartphones.
- The web app should follow the same style guide across all the pages, including the color scheme, typography, and visual elements.
- All the forms should have client-side validation that prevents submission and shows invalid fields if any of the required data is missing. The validation rule should correspond to the expected data type (e.g. email, phone number, name, etc.)

Header:

- The header should be fixed and visible at all times, even when scrolling down the page.
- The logo should be a clickable link that takes the user to the home page.
- The progress bar indicator. It’s visible if a booking is in progress. Indicates the current step.
- The date format dropdown and currency dropdown that applies preference settings and will change the date or currency format accordingly across the entire application
- The log-in button should trigger a modal or popup window that allows users to create a new account or log in using their existing credentials.
- The log-in button is displayed only for an anonymous user
- The user account button takes to the “User Account Page” and is displayed instead of the log-in button if a user is authenticated
- The shopping cart icon for authenticated users takes to the “Shopping Cart Page”

Content Container:

- The content container is the dynamic part of the app that’s changing on router navigation and should contain the main content of the web page, such as flight search results, flight details, booking form, payment form, etc.

Footer:

- Includes the copyright text and payment method logos
- You can include a piece of brief information about developers (name, avatar, GitHub link) that were working on the project

### User authentication (+50)

- The app should provide a user registration flow that guides the user through the process of creating an account. The flow should include two tabs - "Login" and "Sign Up."

- Login tab:

  - The "Login" tab should allow users to sign in to their existing account by providing their email and password. In case of incorrect credentials, the app should alert the user about entering the wrong username or password.

- Sign Up tab:

  - The "Sign Up" tab should allow users to create a new account by providing their email, password, first name, last name, date of birth, gender, phone number, and citizenship.
  - Users should also have the option to sign up using social networks which are not supposed to be a fully functioning OAuth solution: it could be used to pre-fill the registration form
  - Form validation: The registration form should have validation rules in place to ensure that all required fields are filled in, the name field doesn't contain numbers, the email address is valid, and the phone number is in the correct format.
  - Acknowledgment of terms and conditions: The registration form should include a checkmark to indicate that the user acknowledges the terms and conditions. The submission is possible only after checking the checkbox.

- Once a user has logged in or signed up, they should stay on the same page where they initiated the authentication process.

### Flight Search (Main) Page (+100)

- The entry point of the app. Available for anonymous users.

- The flight search form should include the following fields:

  - type of flight (one-way or round trip),
  - destination from (with autocomplete dropdown),
  - destination to (with autocomplete dropdown),
  - dates of flight to a destination and return flight date (using date picker),
  - amount of passengers dropdown with options for adults, children, and infants.

- All the fields are required

- The "switch" button changes the positions of the "destination from" and "destination to" fields.

- The form should have client-side validation that prevents submission and shows invalid fields if any of the required data is missing.

- Once a user filled in all the required fields and clicks the “Search” button, he’s taken to the “Flight Selection” page

### Flight Selection Page (+150)

- Available for anonymous users.
- The Flight Selection Page is the second step of the booking process, following the Flight Search form.
- It should show the progress of booking and the current step
- The page displays previously selected destinations, dates, flight types, and amount of passengers.

- The "Edit" button should allow the user to modify their search criteria if needed in a quick way by showing a floating panel with the same fields as on the Flight Search Page.
- Each flight section should be displayed in a separate container with a header that displays the flight destination.
- The number of flights should represent the selected flight type: one-way or round trip
- A calendar should be displayed for each flight section. It includes price as well
- Dates in the past should be disabled by default.

- Each selected date should contain the following information:

  - Departure location, date, and time
  - Arrival location, date, and time
  - Flight duration
  - Flight number
  - Available seats
  - A flight could be direct and connected. In both cases, all the stops should be displayed.

- Each selected date should be displayed with a color indicator that shows the availability of seats (green - more than half of available seats, orange - less than half of seats are available, red - less than 10 seats are available).

- Once the user selects a date, they should click the "Select" button which confirms the current choice.

- If the user selects a round-trip flight on the previous page, the same process should be followed for the return trip.

- Once the user has selected all the required flights (clicking the “Select” button), the "Continue" button should be enabled, allowing the user to proceed to the Booking Process Page.

- The "Continue" button is disabled until the user selects all the flights

- The "Back" button should allow the user to return to the Flight Search form with previously pre-filled data.

### Booking Process Page (+100)

- Available for authenticated users and only if flight data is provided from the previous step

- The Booking Process Page is the second step of the booking process, following the Flight Selection Page.

- It should show the progress of booking and the current step

- The page should list all previously selected passengers and provide the following input fields:

  - First name
  - Last name
  - Gender
  - Date of birth.
  - Baggage options (missing on designs, so the look and feel are fully up to you). Represents whether the checked-in baggage is included and how much. Otherwise, we assume that only cabin baggage is included. Checked-in baggage is unavailable for infants.

- These fields should include appropriate validation to ensure that the entered data is accurate.

- Contact Information: The page should include input fields for:

  - country code
  - phone number
  - email of the user.

- These fields should also include appropriate validation

- The page should include two buttons, "Back" and "Continue". Clicking the "Back" button should take the user back to the previous page, with all the data preserved. Clicking the "Continue" button should take the user to the summary page with all the information provided.

### Summary Page (+50)

- The Summary page is the final step before confirming the flight booking. It will display all the details entered by the user during the booking process, including:

  - Flight details: This section should display the flight number, departure and arrival times, and dates.
  - Passenger details: This section should show the passenger data as well as baggage options.
  - Payment details: This section should display the total cost of the booking, broken down by each component, such as the base fare, taxes, and any additional fees.

- The Summary page should also include the following elements:

- Process indicator: A visual indicator should show the user which step of the booking process they are on and how many steps are remaining.
- Buy Now button: This button should allow the user to confirm the booking and proceed to payment.
- Add to Cart button: This button should allow the user to add the booking to their shopping cart and continue browsing the app. The user should be able to return to the cart at a later time to complete the booking.
- Back button: This button should allow the user to return to the previous step in the booking process to make any necessary changes.

### Shopping Cart (User Account) Page (+100)

These two pages are visually similar and represent either the added booking to a cart or already finished ones.

Shopping Cart page:

- The Shopping Cart page should display a table with all previously added bookings that are awaiting payment.
- The table should have the following columns: flight number, destination(s), flight type, departure and arrival date and time, passenger amount, and price.
- Each row should have a checkbox on the left-hand side, which allows users to select multiple bookings for payment.
- On each row, there’s the three-dot icon with a select menu that allows editing or deleting the booking. For editing a booking, take a user to the Booking Process Page with pre-filled data
- There should be a "Select All" checkbox at the top of the table, which allows users to select all the bookings in the cart with one click.
- There should be a "Continue to Payment" button at the bottom of the page, which finishes the checkout process.

User Account page:

- The User Account page should display a table with all the bookings made by the user.
- The table should have the same columns as the Shopping Cart page.
- Each row should have a clickable link that navigates the user to the Booking Summary page.
- The Booking Summary page should display all the information about the booking, but without the option to modify or cancel the booking.
- There should be a "Return to Account" button on the Booking Summary page, which takes the user back to the User Account page.

## Penalties

- The presence of errors and warnings in the console - 100 points

- The presence in the console of the results of the console.log execution - 50 points

- Making commits after the deadline:

  - \-30% for making commits within up to 3 days of the passed deadline
  - \-70% for making commits within up to 7 days of the passed deadline
