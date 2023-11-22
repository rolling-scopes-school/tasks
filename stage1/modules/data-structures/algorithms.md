# Algorithms/Data Structures

- [Basic Sorting and Searching Algorithms](#Basic-Sorting-and-Searching-Algorithms)
- [Basic Data Structures](#Basic-Data-Structures)

## Basic Sorting and Searching Algorithms

### Big-О Notation

In programming, Big-O notation indicates the number of steps (processor clock cycles) an algorithm takes to execute. It characterizes the efficiency of a function or a specific algorithm.

Donald Knuth introduced the use of Big-O to assess algorithm complexity.

Read as:

- O(1) – O of one
- O(n) – O of n
- O(n²) - O of n squared
  ...

The faster the execution time of a function increases with the number of elements, the less efficient the algorithm is. Some commonly encountered complexities include:

- О(1)
- O(log n)
- O(n)
- O(n log n)
- O(n²)
- O(n!)

Their efficiencies:

![Visual representation of algorithm execution complexities](images/big-o.png)

The following demo visually compares the execution speed of some sorting algorithms that differ in their Big-O values _(the image is clickable)_:

[![Demo images](images/algoritms-timer-demo.png)](https://algorithms-timer-demo.netlify.app/)

### Bubble Sort

Iterates through a dataset from left to right, comparing values within each pair and moving the smallest to the left. The process repeats until no value can be moved.

The algorithm is simple to implement but inefficient.

#### Complexity (Big-O)

- Best case: **O(n)**
- Average and worst cases: **O(n²)**

#### Implementation

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

### Merge sort

Divides the entire dataset into a minimum of two groups. Pairs of values are compared, and the smallest is moved to the left. After sorting within all pairs, the left values of two left pairs are compared, creating a group of four values: two smallest on the left, two largest on the right.  
This process repeats until only one set remains.

One of the fundamental sorting algorithms.

#### Complexity (Big-O)

- Best case: **O(n)**
- Average and worst cases: **O(n log n)**

#### Implementation

```js
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([3, 5, 8, 5, 99, 1]); // [1, 3, 5, 5, 8, 99]
```

### Quick Sort

Divides the entire dataset in half by selecting the middle element (also known as `pivot`) and moving all elements smaller than it to the left. The same procedure is iteratively performed on the left part until only two elements remain. The same process is then applied to the right part.  
Data will continuously split until fully sorted.

###### Note

Although the Big-O values here are the same as many other sorting algorithms (and in some cases worse), this algorithm often performs faster in practice, for example, compared to merge sort.

#### Complexity (Big-O)

- Best case: **O(n)**
- Average case: **O(n log n)**
- Worst case: **O(n²)**

#### Implementation

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

#### Comparison of Merge Sort and Quick Sort

- Quick sort is often more efficient in practice
- Merge sort **immediately** divides the dataset into the smallest possible groups and then incrementally sorts and merges the groups
- Quick sort **sequentially** divides the dataset by the average value until it is recursively sorted

### Binary Search

#### Implementation

1. Iteration Method

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
```

2. Recursive Method

```js
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

---

## Basic Data Structures

- Array
- Linked List
- Stack
- Queue
- Hash Table
- Binary Tree

### Array

- An ordered set of elements, each accessible by its index (ordinal number in the array)
- Optimal for indexing (retrieving an array element by its number).
- Poor for search, insertion, and deletion unless performed at the very end of the array

#### Complexity (Big-O)

- Indexing: **O(1)**
- Search: **O(n)**
- Binary search: **O(log n)**
- Insertion: **Inadmissible** _(unless performed at the very end of the array)_

###### Note

Learn more about inserting elements in an array [here](https://javascript.info/array#performance)

### Linked List

- Data is stored in nodes, pointing to other nodes. The list looks like nested objects
- Each node has a `value` (the value of that element/node) and `nextNode` (reference to the next element in the linked list).
- Optimal for insertion and deletion (as it only requires shifting the pointer from one element to the next).
- Poor for indexing and searching (difficult to get an element by its number or find an element due to nested structure).

![Visual representation of linked list](images/linked-list.jpeg)

#### Complexity (Big-O)

- Indexing: **O(n)**
- Search: **O(n)**
- Binary search: **O(n)**
- Insertion: **O(1)**

###### Note

In addition to a Linked List, there is also a **Doubly Linked List**: it has, in addition to `nextNode` and `value`, a `previousNode` (value of the node, reference to the next node, and reference to the previous node, respectively).

### Stack

- Usually implemented using a linked list but can be created from an array
- Stacks are **Last-In-First-Out (LIFO)** data structures
- An analogy to a stack is a stack of plates: the last plate added to the stack will be the first one taken
- The head is the only place for inserting and removing elements

![Visual representation of stack](images/stack.jpeg)

#### Complexity (Big-O)

- Indexing: **O(n)**
- Search: **O(n)**
- Binary search: **O(n)**
- Insertion: **O(1)**

### Queue

- Like stacks, queues can be implemented using a linked list or an array
- Queues are **First-In-First-Out (FIFO)** data structures
- An analogy to a queue is a line at a store: the first customer in will be served first
- Elements are removed from the head, and added to the tail

![Visual representation of queue](images/queue.jpeg)

#### Complexity (Big-O)

- Indexing: **O(n)**
- Search: **O(n)**
- Binary search: **O(n)**
- Insertion: **O(1)**

###### Note

In addition to a standard Queue, there exists a specialized data structure known as a **Priority Queue**.

While a regular queue follows a First-In-First-Out (FIFO) principle, a Priority Queue prioritizes elements based on their assigned priorities. This means that the element with the highest priority is served first, distinguishing it from a standard queue where the order of arrival determines service.

### Hash Table

- A hash table is an implementation of an **associative array**, a list of **key-value** pairs that allow you to retrieve a value via a key
- JS object can be considered a form of a hash table, two most common ways to implement hash table in JS are with `Object` and `Map`
- Optimal for search, insertion, and deletion

![Visual representation of hash table](images/hash-table.jpeg)

#### Complexity (Big-O)

- Indexing: **O(1)**
- Search: **O(1)**
- Insertion: **O(1)**

###### Note

Internally a hash table utilizes a **hash function** to transform a key into an index that points to where the value is stored in memory.

A hash function is a method or function that takes an item’s key as an input, assigns a specific index to that key and returns the index whenever the key is looked up. This operation usually returns the same hash for a given key.

Sometimes, a hash function can generate the same index for more than one key. This scenario is referred to as a **hash collision**.

Collisions are a problem because every slot in a hash table is supposed to store a single element.

Hash collisions are usually handled using two common strategies.

1. **Linear probing**
   Linear probing works by skipping over an index that is already filled. It could be achieved by adding an offset value to an already computed index. If that index is also filled, add it again and so on.
   &nbsp;
   _One drawback of using this strategy is that if you don’t pick an offset wisely, you can jump back to where you started and miss out on so many possible positions in the array:_
   &nbsp;
   ![Visual representation of linear probing](images/linear-probing.png)

2. **Chaining**
   In the chaining strategy, each slot of our hash table holds a pointer to another data structure such as a [linked list](#linked-list) or a [tree](#binary-tree). Every entry at that index will be inserted into the linked list for that index.
   &nbsp;
   As you can see, chaining allows us to hash multiple key-value pairs at the same index in constant time.
   &nbsp;
   _This strategy greatly increases performance, but it is costly in terms of space:_
   &nbsp;
   ![Visual representation of chaining](images/chaining.png)

### Binary Tree

- A binary tree is a data structure in which each node has a maximum of two child elements: left and right
- The key of the left child node is smaller than that of the parent
- The key of the right child node is larger than that of the parent
- The reason to use trees might be because you want to store information that naturally forms a hierarchy, like the file system on a computer
- Optimal for sorting and searching

![Visual representation of binary  search tree](images/binary-search-tree.jpg)

#### Complexity (Big-O)

- Indexing: **O(log n)**
- Search: **O(log n)**
- Insertion: **O(log n)**

###### Note

In addition to the binary tree, various types of trees exist:

- Based on the number of children:

  - Ternary Tree
  - N-ary Tree (Generic Tree)

- based on the nodes' values:
  - Binary Search Tree
  - AVL Tree
  - Red-Black Tree
  - Segment Tree

To know more about types of trees, read [this article](https://www.geeksforgeeks.org/types-of-trees-in-data-structures/)

There's also tree-like data structure, called **Trie**.  
It's a tree-like data structure used for efficient storage and retrieval of strings. Each node in the Trie represents a character, and the paths from the root to the nodes form words.  
It's particularly useful for tasks like autocomplete and spell checking.

To learn more about Trie, visit [this link](https://www.geeksforgeeks.org/introduction-to-trie-data-structure-and-algorithm-tutorials/)

### Heap

A Heap is a tree-based data structure which is an almost complete tree that satisfies the **heap property**.

Heap property:

- For a **max heap**: each child node is smaller than its parent node
- For a **min heap**: each child node is greater than its parent node

While heaps have a specific ordering, they <u>do not necessarily have the sorted order that a binary search tree maintains</u>. The ordering in a heap is such that the maximum (or minimum) element can be quickly accessed at the root.

Heaps are commonly used to implement priority queues, allowing efficient retrieval of the highest (or lowest) priority element.  
You encounter heaps when exploring algorithms like **heap sort** or **Dijkstra's shortest path** algorithm.

![Visual representation of min heap](images/min-heap.jpeg)
![Visual representation of max heap](images/max-heap.jpeg)

#### Complexity (Big-O)

For min heap:

- Search: **O(n)**
- Insertion: **O(1)**
- Find-min: **O(1)**
- Delete-min: **O(log n)**

Find more info about heaps [here](https://onestepcode.com/heap-implementation-javascript/)

### Graph

In Computer Science, a Graph is a non-linear data structure that can be used to represent complex <u>relationships</u> between objects. Graphs are made up of a finite number of nodes (**vertices**) and the edges (**lines** or **arcs**) that connect them.

Graphs can be used to model a wide variety of real-world problems, including social networks, transportation networks, and communication networks. Thus the development of algorithms to handle graphs is of major interest in the field of computer science.

There is a vast variety of types of graphs, here are some of them:

1. **Directed and Undirected Graphs**:
   - **Directed Graph (Digraph)**: Edges have a direction. If there is an edge from vertex A to vertex B, it doesn't imply an edge from B to A.
   - **Undirected Graph**: Edges have no direction. If there is an edge between vertices A and B, it implies an edge between B and A.
2. **Weighted and Unweighted Graphs**:
   - **Weighted Graph**: Edges have associated weights or costs, often representing distances, time, or some other metric.
   - **Unweighted Graph**: Edges have no associated weights; all edges are considered equal.
3. **Cyclic and Acyclic Graphs**:
   - **Cyclic Graph**: Contains at least one cycle, a closed path where the last vertex is the same as the first.
     **Acyclic Graph**: Does not contain any cycles.

![Visual representation of directed and undirected graphs](images/graph.jpeg)

To learn more about graphs, visit [this link](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)

#### What to do before the start of the course

- Perform tasks on the [Codewars website](https://www.codewars.com/) and determine the Big-O notation of the algorithms you use.

#### RS School webinars

- [Data Structures with JS (RU)](https://youtu.be/j6w_ZJSYNRU)

#### Additional Materials

- [Big O Notation and Time Complexity](https://youtu.be/JgWm6sQwS_I?si=9-3WgSij8pGON3pq)
- [JavaScript Data Structures (Playlist)](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=5AsAUr8NvY8C3JpZ)
- [CS50x 2023 Data Structures](https://www.youtube.com/live/X8h4dq9Hzq8?si=Z-Pl-anE6_rH9lUS)
- [CS50x 2023 Algorithms](https://www.youtube.com/live/4oqjcKenCH8?si=MOf4kjKY0Ra7Lc5t)
- [Sorting Algorithms Visualizations (Playlist)](https://youtube.com/playlist?list=PL2aHrV9pFqNS79ZKnGLw-RG5gH01bcjRZ&si=_HIpEn3bpoRYsMiA)
