## BoolSet

### Point-free style exercise

BoolSet is function that turns an array like this:

```js
["a", true, "b", true, "c", false, "d", true, "e", false];
```

into an array like this:

```js
["a", "b", "d"];
```

That is, it considers pairs of adjacent values `'a'` and `true`, `'b'` and `false` and so on, picking only the first value of each pair where the second value is true.

## Limitations:

BoolSet should be a point-free function, a combination of lodash functions only.
No custom functions are allowed.
