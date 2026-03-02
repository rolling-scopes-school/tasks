# Algorithms/Data Structures

- [Basic Sorting and Search Algorithms](#basic-sorting-and-search-algorithms)
- [Basic Data Structures](#basic-data-structures)

## Basic Sorting and Search Algorithms

### Big-O Notation

In programming, Big-O shows how many steps (CPU cycles) an algorithm takes to execute.\
It characterizes the performance of a function (efficiency of a specific algorithm).\
Donald Knuth proposed using Big-O to evaluate algorithm complexity.\
Pronunciation: O(1) – O of one, O(n) – O of n.

The faster the execution time of a function grows as the number of elements increases, the less efficient the algorithm is. Some of the most commonly encountered complexities are:

- O(1)
- O(log n)
- O(n)
- O(n log n)
- O(n²)
- O(n!)

Their efficiency:

![Visual complexity of algorithm execution](./images/big-o.png)

The following demo allows you to visually compare the execution speed of some sorting algorithms that differ in Big-O value (image is clickable).

[![Demo images](./images/algoritms-timer-demo.png)](https://algorithms-timer-demo.netlify.app/)

### Bubble Sort

- Traverses the dataset from left to right, comparing values within each pair and moving the smallest to the left.
  The process repeats until no value can be moved anymore.
- The algorithm is very simple to implement, but inefficient
- Efficiency (Big-O):
  - Best case: O(n).
  - Average and worst cases: O(n²).

![Visual algorithm execution](./images/bubble-sort-example.gif)

**Bubble Sort**

```js
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
}
bubbleSort(arr);
```

### Merge Sort

- The entire dataset is divided into at least two groups.
  Pairs of values are compared with each other, the smallest is moved to the left.
  After sorting within all pairs, the left values of two left pairs are compared. Thus, a group of four values is created: the two smallest on the left, the largest on the right.
  The process repeats until only one set remains.
- This is one of the fundamental sorting algorithms.
- Efficiency (Big-O):
  - Best case: O(n).
  - Average and worst cases: O(n log n).

![Visual algorithm execution](./images/merge-sort-example.gif)

### Quick Sort

- The entire dataset is split in half by selecting the middle element and moving all those smaller than it to the left.
  Then the same procedure is iteratively performed on the left part until only two elements remain. As a result, the left part will be sorted.
  Then the same is done with the right part.

Although Big-O has the same values here (and in some cases worse) as many other sorting algorithms, in practice this algorithm often works faster, for example, than merge sort.
The data will be sequentially halved until it is completely sorted.

- Efficiency (Big-O):
  - Best case: O(n).
  - Average case: O(n log n).
  - Worst case: O(n²).

![Visual algorithm execution](./images/quicksort-example.gif)

**Comparison of Merge Sort and Quick Sort Algorithms**

Quick sort is often more efficient in practice.
Merge sort immediately divides the dataset into the smallest possible groups, and then reconstructs the set by incrementally sorting and enlarging groups.
Quick sort sequentially divides the set by the median value until it is recursively sorted.

**Quick Sort**

```js
function quickSort(arr) {
  if (arr.length == 0) return [];
  let a = [],
    b = [],
    p = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) a.push(arr[i]);
    else b.push(arr[i]);
  }
  return quickSort(a).concat(p, quickSort(b));
}
quickSort(arr);
```

### Binary Search

[What is Binary Search](https://youtu.be/9EmO9_MK1gQ?t=34)

![Visual algorithm execution](./images/binary_search_tree_example.gif)

**Binary Search**

```js
const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, i) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] > i) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

binarySearchIterationMethod(arr, 100); // 7

function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  else {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] > i) {
      return binarySearchRecursiveMethod(arr, i, left, mid - 1);
    } else {
      return binarySearchRecursiveMethod(arr, i, mid + 1, right);
    }
  }
}

binarySearchRecursiveMethod(arr, 5); // -1
```

## Basic Data Structures

- array
- list
- stack
- queue
- hash table
- binary tree

### Array

- An ordered collection of elements, each of which can be accessed by its index (ordinal number in the array).
- Optimal for indexing (getting an array element by its number).
- Poor for searching, inserting and deleting, unless doing so at the very end of the array.
- Efficiency (Big-O):
  - Indexing: O(1).
  - Search: O(n).
  - Binary search: O(log n).
  - Insertion: not allowed (unless doing so at the very end of the array).

![Array](./images/array.webp)

### List (Linked List)

- Data is stored in nodes that point to other nodes. Ultimately, the list looks like nested objects.
- Each node has a value (the value of this element/node) and nextNode (reference to the next element of the linked list).
- Optimal for insertion and deletion (since you just need to "redirect" the pointer from a specific element to the next one).
- Poor for indexing and searching (difficult to get an element by its number or simply find an element due to nesting).

###### Additionally:

- There is a doubly linked list: in addition to nextNode and value, it also has previousNode (node value, reference to the next node, and to the previous one, respectively).

![List](./images/linked-list.webp)

### Stack

- Usually implemented using a linked list, can also be created from an array
- Stacks are LIFO data structures (last in, first out).
- A stack analogy is a stack of plates: the last plate added to the stack will be taken first.
- The head is the only place for inserting and deleting elements.

![Stack](./images/stack.png)

### Queues

- Like stacks, queues can be implemented using a linked list or array.
- Queues are FIFO data structures (first in, first out).
- A queue analogy is a queue in a store: the first customer will be served first
- Elements are removed from the head and added to the tail.

- Efficiency of list, stack, queue (Big-O):
  - Indexing: O(n).
  - Search: O(n).
  - Binary search: O(n).
  - Insertion: O(1).

![Queue](./images/queue.png)

### Hash Table (Object)

- Data is stored as key-value pairs.
- Optimal for searching, inserting and deleting.
- Efficiency (Big-O):
  - Indexing: O(1).
  - Search: O(1).
  - Insertion: O(1).

![Hash table](./images/hash-table.jpg)

### Binary Tree

- A binary tree is a data structure in which each node has at most two child elements. Child elements can be left and right. Trees are designed to optimize lists and sorting. Used to create binary search trees.

![Binary tree](./images/binary-tree.png)

#### Binary Search Tree

A binary tree uses key comparison to decide which direction to follow to a child node.

- The key of the left child node is less than the parent's.
- The key of the right child node is greater than the parent's.
- There cannot be duplicate nodes.
- Optimal for sorting and searching.

- Efficiency (Big-O):
  - Indexing: binary search tree — O(log n).
  - Search: binary search tree — O(log n).
  - Insertion: binary search tree — O(log n).

![Binary search tree](./images/binary-search-tree.png)

#### What You Can Do Before the Course Starts

- solve problems on [Codewars](https://www.codewars.com/) website, determine the Big O value of the algorithms you use

#### RS School Webinars

- [Data Structures with JS](https://youtu.be/j6w_ZJSYNRU)

#### Additional Materials

- [Cheat sheet for technical interviews](https://habr.com/ru/company/mailru/blog/350326/)
- [Sorting algorithms in dances](https://www.youtube.com/user/AlgoRythmics/videos)
- [Algorithm complexity evaluation. Algorithm complexity. Big O](https://youtu.be/ZRdOb4yR0kk)
- [CS50 (Computer Science 50)](https://ru.wikipedia.org/wiki/CS50)
