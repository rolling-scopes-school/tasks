Deadline         | Folder Name       |Branch name
-----------------|-------------------|----------
<date>           | binary-search-tree| binary-search-tree

### Binary search tree
Implement data structure **"binary search tree"**. It should be done as a **stand-alone**, **clean**, **independent component**, which can be used wherever needed. B.S.T. should have the following methods (you can add your own methods, but the 7 listed below must be and named exactly as stated):
* root     (**no param**)          returns root* of the tree; 
* insert   (**param:** key, value) stores specified value in tree using key; method should be chainable**;
* delete   (**param:** key)        removes node from tree by provided key; method should be chainable**;
* search   (**param:** key)        looking for stored data in tree using key;
* contains (**param:** value)      returns whether BST contains such value or not;
* traverse (**param:** order)      retrieves ordered sequence of stored values in given order (order is boolean)   
* verify   (**no param**)          verifies whether tree is well-formed binary search tree or not

**chainable
```javascript
var bst = new BinarySearchTree();
...
bst.insert(key1, value1).insert(key2, value2).insert(key3, value3).delete(key2).search(key3);
```
##### DON'T USE ARRAYS OR OTHER DATA STRUCTURES FOR STORING ITEMS INSIDE BST!
##### PAY SPECIAL ATTENTION TO CODE QUALITY
