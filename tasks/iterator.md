| Deadline | Folder name |
|----------|-------------|
| 28.12.2015 10:00| iterator |

### Implement simple Iterator pattern.

**Requirements:**

1. Bidirectional iteration with a sliding window (yielding sub-arrays) with configurable width (default 1) starting from the 0th element.
2. Iteration should be configurable to be cyclic (jumping to the 0th element after reaching the end of the sequence and likewise to the last element from the 0th when iterating backwards) or non-cyclic (default behavior).
3. Iterator should accept a custom window transformation/positioning function as a parameter, applied at each iteration step.
4. Iterated array should be observed (with Array.observe or a different Observer pattern implementation) and Iterator instances should react to array modifications accordingly (item removal, insertion and appending should be supported).
5. Options for iterator should be passed via config object.

**Required API:**
```javascript
iterator.forward();  // moves iteration window forward and returns sub-array of current values.
iterator.backward(); // moves iteration window backward and returns sub-array of current values.
iterator.current();  // returns sub-array of current values.
iterator.jumpTo(i);  // moves iteration window to i'th posiiton (don't return values).
```

The whole functionality ~~should~~ must be covered with tests. The best solution to follow TDD.
For testing please use mocha+chai+sinon and mocha-chai-sinon plugin (if needed).

**Usage examles:**
```javascript
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var config = {
  'cyclic': true,
  'width': 3
};
var iterator = new Iterator(array, config);
iterator.current() // --> [0, 1, 2]
iterator.forward() // --> [1, 2, 3]
iterator.jumpTo(5) // --> undefined
iterator.current() // --> [4, 5, 6]
iterator.backward()// --> [3, 4, 5]

iterator.jumpTo(9)
iterator.current() // --> [8, 9, 0]
iterator.forward() // --> [9, 0, 1]
```

#### Code readability and maintainability are !important.
