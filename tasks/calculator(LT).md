## Task: Calculator
![screenshot](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/ready-projects/images/calculator.png)

The **calculator** is one of the best projects for getting started with JavaScript. Such a project includes rather complex moments of creating a user interface and using JavaScript to work with it, and at the same time it is quite simple to implement and available to developers of any skill level. If you want to learn JavaScript or improve your skills with it, this project will help you achieve your goal.


## Prerequisites

1. Create a new branch named *calculator* in **your private RS** Github account and upload your HTML and CSS files.
2. The task will be checked by *cross-check*. So you should **deploy your solution** (preferably to gh-pages) and submit the **link to the hosted solution** into cross-check submit

**IMPORTANT!!!**
Failure to host your solution and/or not providing a correct link to the hosted solution will result in 0 points!

**Note!** Do not use the eval ()!

### Evaluation criteria 
**Maximum** score for the task **100** points

**Basic functionality +50 points**

The calculator performs mathematical operations: **addition, subtraction, multiplication, division**. 
It is necessary to have a *decimal point, actions with multi-digit numbers, the ability to perform several actions in a row, to clear the result*

**Additional math operations**
Add to the four mathematical operations mentioned in the previous paragraph two more: square root (**+10 points**) and exponentiation (**+10 points**).

**Actions with negative numbers +10 points**
The calculator can work with both positive and negative numbers. For example, you can divide -9 by -3. When you enter a negative number, a minus sign appears in front of it. 
If you have a square root operation, consider how you will handle trying to find the square root of *a negative number* ( **+10 points**).

**Actions with decimals +10 points**
JavaScript can't count decimals correctly. Teach your calculator to do this. For example, when adding 0.1 and 0.2, it should return 0.3

### Instruction to cross-check
Please, check the assignment without fanaticism. Your task is not to break the application using invalid numbers and operations, but to test its functionality using simple examples, operations with two- and three-digit numbers. If the item of the requirements is not fully met, try to verify what ​part of the item is done and give the appropriate number of points

### Examples of calculations to verify that the calculator is working and that it meets the criteria:
It's just an example, numbers may be different. 
The => sign in the examples means clicking on the "equal" calculator button. If calculations are performed in real-time and the result is displayed without clicking on the "equal" button, this is not an error. 


- **Basic functionality**
 1. `1 + 2 => 3` ( *+10 points*)
 2. `23 + 69.5 => 92.5` ( *+10 points*)
 3. `74 * 3 - 5 => 217`( *+10 points*)
 4. `2 + 3 => 5 continue entering 4 => 4` - after "equals" the next digit overwrites the result ( *+10 points*)
 5. there is a button to clear the result ( *+10 points*)
 
- **Additional math operations**
 1. `25 √  => 5` or ` √ 25  => 5` - both options are correct ( *+5 points*)
 2. `9 √ + 1  => 4` или ` √ 9 + 1  => 4` -  both options are correct  ( *+5 points*)
 3. `2 ^ 2 => 4` ( *+3 points*)
 4. `15 ^ 3 => 3375` ( *+3 points*)
 5. `10.1 ^ 3 => 1030.301` ( *+4 points*)
 
- **Actions with negative numbers**
 1. `-9 / -3  => 3` ( *+1 points*)
 2. `2 + -2 => 0` ( *+1 points*)
 3. `2 / -2 => -1` ( *+1 points*)
 4. `-9 ^ 3   => -729` ( *+1 points*)
 5. `-9 √  => error notification` or ` √ - 9 => error notification` - both options are correct  ( *+6 points*)
 
- **Actions with decimals**
 1. `0.1 + 0.2  => 0.3` ( *+2 points*)
 2. `0.4 - 0.1 => 0.3`( *+2 points*)
 3. `0.0004 + 0.0004 => 0.0008`( *+2 points*)
 4. `-0.1 * 0.2 => -0.02`( *+2 points*)
 5. `-0.15 + -0.15  => -0.3` - not - 0.30 ( *+2 points*)
