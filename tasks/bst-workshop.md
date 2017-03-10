Deadline         | Folder Name    | Coefficient
-----------------|----------------|---------------
10.03.2017 21:59 | binary-search-tree    | X

## Binary search tree
Implement data structure **binary search tree**. It should be done as a **stand-alone**, **clean**, **independent component**, which can be used wherever needed. B.S.T. should have the following methods (you can add your own methods, but the 7 listed below must be and named exactly as stated):

```js
const bst = new BinarySearchTree();

/** 

  WARNING:
  Please use the suggested functions names!

**/

// returns root of the tree;
bst.root();  

// stores specified value in tree using key; method should be chainable;
bst.insert(key, value); 

// removes node from tree by provided key; method should be chainable;
bst.delete(key); 

// looking for stored data in tree using key;
bst.search(key);

// returns whether BST contains such value or not;
bst.contains(value);

// returns ordered sequence of stored values in given oreder (order is boolean)
bst.traverse(order); 

// verifies whether tree is well-formed binary search tree or not  
bst.verify();  
``` 

### Examples:
```js
const bst = new BinarySearchTree();

bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

//---2----
//1-----3-
//--------

bst.root(); // 'two'

bst.delete(1).delete(3);

 //---2----
//---------
//----------

bst.root(); // 'two'

bst.insert(1, 'one');
bst.insert(3, 'three');

//---2----
//1-----3-
//--------

bst.search(1); // 'one'
bst.contains('three'); // true
bst.traverse(true); // ['one', 'two', 'three']
bst.traverse(false); // ['three', 'two', 'one']

bst._root.key = 0;
bst.verify(); //false

``` 

### Requirements

1. Folder name and branch name shuld be called `binary-search-tree`
2. File with source code shuld be called `bst.js`
3. Don't use ES6 `class` declaration
2. Please use the following template for your BST: 
```js

// WARNING: replace ... with your code
function Node(...) {
    this.key = ...;
    this.value = ...;
    
    //please don't rename left, right, key, value and root properties
    this._left = ...;
    this._right = ...;
}

function BinarySearchTree() {
    this._root = ...;
}

// You can comment this block for testing in the browser but final solution MUST contains this module.exports code
module.exports = {
  BinarySearchTree,
  student: 'YOUR GITHUB ACCOUNT'
};

```
