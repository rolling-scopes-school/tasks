| Deadline | Folder name | Branch name |
| -------- | ----------- | ----------- |
| TBD      | iterator    | iterator    |

### Implement simple Iterator pattern.

**Requirements:**

1. Bidirectional iteration with a sliding window (yielding sub-arrays) with configurable width (default 1) starting from the 0th element.
2. Iteration should be configurable to be cyclic (jumping to the 0th element after reaching the end of the sequence and likewise to the last element from the 0th when iterating backwards) or non-cyclic (default behavior).
3. Iterator should accept a custom window transformation/positioning function as a parameter, applied at each iteration step.
4. Iterated array should be observed (Observer pattern implementation) and Iterator instances should react to array modifications accordingly (item removal, insertion and appending should be supported).
5. Options for iterator should be passed via config object.
6. The whole functionality ~~should~~ **must!** be covered with tests. The best solution to follow TDD, but not required.
   For testing please use [mocha](https://mochajs.org/)+[chai](http://chaijs.com/)+[sinon](http://sinonjs.org/) and [sinon-chai](https://github.com/domenic/sinon-chai) plugin (if needed).

**Required API:**

```javascript
iterator.forward(); // moves iteration window forward and returns sub-array of current values.
iterator.backward(); // moves iteration window backward and returns sub-array of current values.
iterator.current(); // returns sub-array of current values.
iterator.jumpTo(i); // moves iteration window to i'th posiiton (don't return values).
```

**Usage examples:** #####**Example 1:**

```javascript
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var config = {
  cyclic: true,
  width: 3,
};
var iterator = new Iterator(array, config);
iterator.current(); // --> [0, 1, 2]
iterator.forward(); // --> [1, 2, 3]
iterator.jumpTo(5); // --> undefined
iterator.current(); // --> [5, 6, 7]
iterator.backward(); // --> [4, 5, 6]

iterator.jumpTo(8); // --> undefined
iterator.current(); // --> [8, 9, 0]
iterator.forward(); // --> [9, 0, 1]
```

#####**Example 2:**

```javascript
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var config = {
  cyclic: true,
  width: 3,
  // this function is only! an example of usage
  // iterator should except any window transformation function (with proper API)
  // and use it for moving or transforming window in a designed way
  windowTransform: function (windowStart, windowEnd) {
    // which params to pass you can choose yourself
    var newStart = --windowStart;
    var newEnd = --windowEnd;

    return { newStart, newEnd };
  },
};

var iterator = new Iterator(array, config);
iterator.current(); // --> [0, 1, 2]
iterator.forward(); // --> [9, 0, 1]
iterator.backward(); // --> [0, 1, 2]
```

#### Code readability and maintainability are !important.
