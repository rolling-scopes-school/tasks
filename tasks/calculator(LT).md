# Task: Calculator
![screenshot](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/ready-projects/images/calculator.png)

The **calculator** is one of the best projects for getting started with JavaScript. Such a project includes rather complex moments of creating a user interface and using JavaScript to work with it, and at the same time it is quite simple to implement and available to developers of any skill level. If you want to learn JavaScript or improve your skills with it, this project will help you achieve your goal.

Browser Support: Google Chrome ( last version)

## Prerequisites

1. Create a new branch named *calculator* in **your private RS** Github account and upload your HTML and CSS files.
2. The task will be checked by *cross-check*. So you should **deploy your solution** (preferably to gh-pages) and submit the **link to the hosted solution** into cross-check submit

**IMPORTANT!!!**
Failure to host your solution and/or not providing a correct link to the hosted solution will result in 0 points!

**Note!** Do not use the eval ()!

## Assessment criteria 
If the task is fully completed, and no defects are found by reviwer, you are awarded **100 points**. This concerns your solutions HTML, CSS, JS.

## Scoring
**Basic functionality +50 points**
The calculator performs mathematical operations: **addition, subtraction, multiplication, division**. 
It is necessary to have a *decimal point, actions with multi-digit numbers, the ability to perform several actions in a row, to clear the result*
- Basic operations (+ - *) with positive integers (2 + 2 = 4) **+15 points**
- Division (/) with positive integers (the result might be a float) (3 / 2 = 1.5) **+5 points**
- If the result has more than 10 digits, it must be rounded down to show only the first 10 digits in total at all times **+5 points for integers, +5 points for floats**
- Chaining operations (2 + 2 = 4 + 2 = 6 ...) **+10 points**
- Result clear button **+10 points**
- Error message for invalid operations (10 / 0 = Error) **+10 points**

**Additional math operations (+20 points)**
- Square root (25 √ = 5) **+10 points**
- Exponentation (15 ^ 3 = 3375) **+10 points**

**Actions with negative numbers (+10 points)**
*(You get points only if **ALL** of the operations work with negative numbers, for example, if there is no square root implemented, you won't be penalized, but if it is implemented and it is not working correctly with handling negative numbers, you don't get any points for this requirement at all)*

The calculator can work with both positive and negative numbers. For example, you can divide -9 by -3. When you enter a negative number, a minus sign appears in front of it. 
If you have a square root operation, consider how you will handle trying to find the square root of *a negative number*.

2 + -2 = 0
-9 ^ 3  = -729
-9 √  = error

**Actions with decimals (+10 points)**
Decimal operations have it's quirks in most programming languages, you can read about it [here](https://betterprogramming.pub/why-is-0-1-0-2-not-equal-to-0-3-in-most-programming-languages-99432310d476). Teach your calculator to do this.
0.1 + 0.2 = 0.3
0.4 - 0.1 = 0.3
-0.1 * 0.2 = -0.02

## Instruction to cross-check
Please, check the assignment without fanaticism. Your task is not to break the application using invalid numbers and operations, but to test its functionality using simple examples. If the item of the requirements is not fully met, try to verify what part of the item is done and give the appropriate number of points
