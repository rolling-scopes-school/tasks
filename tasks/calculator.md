| Deadline         | Folder name | Branch name |
| ---------------- | ----------- | ----------- |
| 23:59 12.02.2020 | calculator  | calculator  |

# Calculator

## Background

You need to create a page with Lease and Loan calculator. Possible designs: https://drive.google.com/open?id=1AU1dGkvhGgLiwhC6dLxR5hozOr_DotRf

The calculator calculates base payment values to lease or loan a car. Taxes calculate based on zip code; monthly payment calculates based on term, mileage, credit score, apr, down payment and trade-in. Dealer is a person who sells a car. MSRP - Manufacturers Suggested Retail Price.

## App Structure

Calculator

- Two tabs (Loan and Lease)
- Tab 1 (Loan)
  - Input for Down Payment (value can’t be greater than ¼ of MSRP, **default**: 0)
  - Input for Trade-In (value can’t be greater than ¼ of MSRP, **default**: 0)
  - Input for APR (in %, **default**: 0)
  - Input for Post Code (**default**: your current post code)
  - **Buttons** row for Terms (available values: [12, 24, 36, 48, 72, 84], **default**: 24)
  - **Buttons** row for Credit Score (values from 600 to 900 with step 50, **default**: 750)
- Tab 2 (Lease)
  - Input for Down Payment (value can’t be greater than ¼ of MSRP, **default**: 0)
  - Input for Trade-In (value can’t be greater than ¼ of MSRP, **default**: 0)
  - Input for Post Code (**default**: your current post code)
  - **Select** input for Terms (available values: [24, 36, 48], **default**: 36)
  - **Select** input for Mileages (available values: [10000, 12000, 15000], **default**: 12000)
  - **Select** input for Credit Score (values from 600 to 900 with step 50, **default**: 750)
- Info card

  - MSRP
  - Vehicle name
  - Monthly payment
  - Taxes (array of numbers, generates during calculations)
  - Dealer name
  - Dealer phone number
  - Dealer rating

  ## Required functionality

- Calculator
  - When a user opens the page the default calculator values should be set (values from session storage have higher priority than values described above)(post code, credit score, term, mileage, apr, trade-in, down payment )
  - Create a .js file with mock data for the info card, and get this data asynchronously in your react component. (required fields: msrp, vehicle name, dealer name, dealer phone, dealer rating) (You can use Promise.resolve(mockData) to make it async).
  - Validate Down Payment and Trade-In values. (Show messages to indicate that limit has been exceeded).
  - Run calculations after any input value change (only in case if entered values are valid, otherwise show validation error)
  - While data is loading, show spinner icon
  - Share Trade-In, Down Payment and Credit Score values between loan and lease calculator (if a user entered trade-in value on loan tab, and then switched an active tab to lease, he should see entered trade-in for loan and vice versa).
  - The calculator also should be accessible using keyboard
- How to calculate

  When msrp and all the data from calculator inputs are available do the calculation using(**a call of calculation function should be always wrapped in Promise!!!**):

  - monthly payment lease: `(msrp - tradeIn - downPayment) * mileage / 10000 / term * creditScoreValue`
  - monthly payment loan: `(msrp - tradeIn - downPayment) * / term * creditScoreValue * apr`
  - taxes: `postCode.split(‘’).map(num => num * 11)`

  **creditScoreValue defines by the following rules:**

  - If credit score >= 750, then creditScoreValue = 0.95
  - If credit score >= 700 and < 750, then creditScoreValue = 1
  - If credit score >= 640 and < 700, then creditScoreValue = 1.05
  - If credit score < 640 , then creditScoreValue = 1.2

- User session

  Current session should be saved and be accessible when user opens up the page again

## Technical requirements

- Browser support: latest version of Google Chrome.
- Usage of React or React + TypeScript.
- Don’t use create-react-app
- You can use css preprocessors, bootstrap, material design, lodash.js etc.
- Use your own private repository to store and manage code
- Final version of the calculator should be available via a link. The easiest way to do so is to host your project on GitHub pages / Google Firebase / Heroku / Netlify / any other hosting.
- Re-use components and functionality as much as possible (using hoc, render and children prop is welcome)

## Requirements to the quality of code, repository, project structure

- https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md
- Use one of the recommended ways to organize your code: https://reactjs.org/docs/faq-structure.html
- https://medium.com/better-programming/clean-code-applied-to-javascript-part-1-9f3badd5715

## Score criteria

Basic (70) + Normal (120) + Extra (40) - +230

#### Basic scope

Max - **+70**

- Loan calculator (+20)
- Lease calculator (+20)
- Info card (+10)
- Calculation logic (monthly payment and taxes are updated properly) (+20)

#### Normal scope

Max - **+120**

- Spinner (+10)
- Data shares between loan and lease calculator (+20)
- Data loads and calculations does asynchronously (result of the function that loads data about dealer and car is Promise. result of the function that calculates taxes and monthly payment is Promise) (+10)
- Hoc, children or render pop is used (+20)
- Validation for Down Payment and Trade-In (validation message is shown, new calculation haven't run: monthly payment remains the same) (+40)
- Inputs display their values with currency sign (if applicable. Ex.: trade-In, Down Payment) (+20)

#### Extra (additional) scope

Max - **+40**

- Keyboard support (+20)
- Session storage (data saves to storage and restores after page reload). (+20)

## Cross-check requirements

- Flow: https://github.com/rolling-scopes-school/docs/blob/master/docs/cross-check-flow.md

  Example 1: Validation for Down Payment and Trade-In

  - validation message is shown, new calculation haven't run - 40
  - validation message is shown && new calculation is run or validation message is not shown && new calculation haven't run - 20
  - validation hasn't implemented - 0

- Fines:
  - -50 and more - General stage 2 requirements violation or inappropriate quality of the code (depending on the decision of the checking)
  - -10 there are errors in web console
  - -50 there are errors preventing app from normal work
  - -10 uses API key from description, not your own
  - -20 lease and loan calculators look the same

## Useful links

1. location API (https://ipinfo.io/)

- Sign up
- Get token
- Get location data (you need only postal) https://ipinfo.io/json?token=eb5b90bb77d46a

2. React Best Practices

- https://www.codeinwp.com/blog/react-best-practices/
- http://www.jancarloviray.com/blog/react-best-practices-2020/

## Help

In case of any questions leave them in the doc: https://docs.google.com/document/d/1QWoHxUGsVvgAAQeow4FkyZEUCeGgwrkF7omvFsdbZfY/edit#
