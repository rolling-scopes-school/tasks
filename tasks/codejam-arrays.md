## RSSchool stage#2 CodeJam "JS Arrays Quick Draw"

```
[{
  "name": "Return the first element of the array",
  "game": "jsqd",
  "input": "[1, -2, -6, 3, 7]",
  "expected": "1",
  "solution": "",
  "hidden": [
    {
      "input": "[11, -2, -6, 3, -7]",
      "expected": "11"
    }
  ],
  "options": {
    "timeLimit": 120
  },
  "sandboxSettings": {
    "timeout": 150
  }
}, {
  "name": "Return the sum of positive values",
  "game": "jsqd",
  "input": "[1, -2, -6, 3, 7]",
  "expected": "11",
  "solution": "",
  "hidden": [
    {
      "input": "[1, -2, -6, 3, -7]",
      "expected": "4"
    }
  ],
  "options": {
    "timeLimit": 120
  },
  "sandboxSettings": {
    "timeout": 150
  }
}, {
  "name": "Return values that are greater than 42",
  "game": "jsqd",
  "input": "[40, 41, 42, 43, 34, 24, 100]",
  "expected": "[43, 100]",
  "solution": "",
  "hidden": [
    {
      "input": "[40, 41, 42, 43, 34, 24, 100, 55]",
      "expected": "[43, 100, 55]"
    }
  ],
  "options": {
    "timeLimit": 180
  },
  "sandboxSettings": {
    "timeout": 150
  }
}, {
    "name": "Return original array concatenated with its mirror",
    "game": "jsqd",
    "input": "[10, 25, 35, 50]",
    "expected": "[10, 25, 35, 50, 50, 35, 25, 10]",
    "solution": "",
    "hidden": [
      {
        "input": "[10, 25, 35, 50, 60]",
        "expected": "[10, 25, 35, 50, 60, 60, 50, 35, 25, 10]"
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Take every 3rd element of array",
    "game": "jsqd",
    "input": "[3,2,1,33,44,55,66,55,33]",
    "expected": "[3, 33, 66]",
    "solution": "",
    "hidden": [
      {
        "input": "[3,2,1,33,44,55,66,55,33,101]",
        "expected": "[3, 33, 66, 101]"
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Convert array to decimal number",
    "game": "jsqd",
    "input": "[2, 1, 2, 3]",
    "expected": "2123",
    "solution": "arg.reduce((xs, x) => 10 * xs + x)",
    "hidden": [
      {
        "input": "[3, 1, 3, 3, 7]",
        "expected": "31337"
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Move the first two elements to the end of the array",
    "game": "jsqd",
    "input": "['a', 'b', 'c', 'd', 'e']",
    "expected": "['c', 'd', 'e', 'a', 'b']",
    "solution": "",
    "hidden": [
      {
        "input": "['a', 'b', 'c', 'd', 'e', 'j']",
        "expected": "['c', 'd', 'e', 'j', 'a', 'b']"
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Convert array of string to abbreviation",
    "game": "jsqd",
    "input": "\"Union of Soviet Socialist Republics\"",
    "expected": "\"USSR\"",
    "solution": "",
    "hidden": [
      {
        "input": "\"United States of America\"",
        "expected": "\"USA\""
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Sum of other elements",
    "game": "jsqd",
    "input": "[1, 5, 6, 8, 10, 12]",
    "expected": "[41, 37, 36, 34, 32, 30]",
    "solution": "",
    "hidden": [
      {
        "input": "[1, 5, 6, 8, 10, 122]",
        "expected": "[151, 147, 146, 144, 142, 30]"
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Sum of the five biggest numbers",
    "game": "jsqd",
    "input": "[2,-3,-5,10, 14, -20, -50, 100, -200, 42, -11, 200, 142, 19]",
    "expected": "503",
    "solution": "",
    "hidden": [
      {
        "input": "[2,-3,-5,10, 14, -20, -50, 1, -200, 42, -11]",
        "expected": "69"
      }
    ],
    "options": {
      "timeLimit": 180
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Check for Palindrome",
    "game": "jsqd",
    "input": "\"A man, a plan, a canal. Panama\"",
    "expected": "true",
    "solution": "",
    "hidden": [
      {
        "input": "\"race car\"",
        "expected": "true"
      }, {
        "input": "\"A man, a plan, a canal. Panama wrong\"",
        "expected": "false"
      }, {
        "input": "\"kayak\"",
        "expected": "true"
      }
    ],
    "options": {
      "timeLimit": 300
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }, {
    "name": "Check if parentheses are balanced",
    "game": "jsqd",
    "input": "\"arg.reduce((xs, x) => 10 * xs + x)\"",
    "expected": "true",
    "solution": "",
    "hidden": [
      {
        "input": "\"arg.reduce((xs, x) => 10 * xs + x)(\"",
        "expected": "false"
      }, {
        "input": "\"(())\"",
        "expected": "true"
      }, {
        "input": "\")(\"",
        "expected": "false"
      }, {
        "input": "\")()(\"",
        "expected": "false"
      }
    ],
    "options": {
      "timeLimit": 300
    },
    "sandboxSettings": {
      "timeout": 150
    }
  }]
```
