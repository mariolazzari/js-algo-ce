- [JavaScript Algorithms and Data structures](#javascript-algorithms-and-data-structures)
  - [Algorithm](#algorithm)
  - [Big-O complexity](#big-o-complexity)
    - [Object](#object)
    - [Arrays](#arrays)
  - [Math algorithms](#math-algorithms)
    - [Fibonacci](#fibonacci)
    - [Factorial](#factorial)
    - [Prime number](#prime-number)
    - [Power of 2](#power-of-2)
    - [Pawer of 2 Bitwise version](#pawer-of-2-bitwise-version)
  - [Recursion](#recursion)
    - [Fibonacci number](#fibonacci-number)
    - [Factorial recursive](#factorial-recursive)
  - [Search](#search)
    - [Linear search](#linear-search)
    - [Binary search](#binary-search)
    - [Binary search (recursive version)](#binary-search-recursive-version)
  - [Sorting](#sorting)
    - [Bubble sort](#bubble-sort)
    - [Insertion sort](#insertion-sort)
    - [Quick sort](#quick-sort)
    - [Merge sort](#merge-sort)
  - [Misc](#misc)
    - [Cartesian product](#cartesian-product)
    - [Climbing staircase](#climbing-staircase)
    - [Tower of Hanoi](#tower-of-hanoi)
  - [Algotirhm design techniques](#algotirhm-design-techniques)
    - [Brute force](#brute-force)
    - [Greedy](#greedy)
    - [Divice \& Conquer](#divice--conquer)
    - [Dynamic programming](#dynamic-programming)
    - [Backtracking](#backtracking)
  - [Data structures](#data-structures)
    - [Arrays](#arrays-1)
    - [Object](#object-1)
    - [Set](#set)
      - [Sev vs Array](#sev-vs-array)
    - [Map](#map)
      - [Map vs Object](#map-vs-object)
    - [Stack](#stack)
    - [Queue](#queue)
    - [Circular queue](#circular-queue)
    - [Linked list](#linked-list)

# JavaScript Algorithms and Data structures

## Algorithm

A set of well defined instructions to solve a particular problem.
Language independent.

- **Time complexity**: amount of time needed.
- **Space complexity**: amount of memory needed. 

## Big-O complexity

Worst case complexity.

### Object

Collection of key / value pairs.

- Insert: O(1)
- Remove: O(1)
- Access: O(1)
- Search: O(n)
- Objext.keys ( values, entries): O(n)

### Arrays

Ordered collection of values

- Insert / remove at the end: O(1)
- Insert / remove at the beginning: O(n)
- Access: O(1)
- Search: O(n)
- Push / pop: O(1)
- Shift, unshift, concat, slice, splice: O(n)
- forEach, map, filter, reduce: O(n) 

## Math algorithms

### Fibonacci

Sequence in which each number is the sum of the two preceding ones.

```ts
function fibonacci(n: number): number[] {
  const fib: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib;
}
```

Complexity O(n)

### Factorial

Product of an integer and all the integers below it.

```ts
function factorial(n: number): number {
  let fact = 1;

  // O(n)
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}
```

Complexity O(n)

### Prime number

Integers larger than the square root do not need to be checked.

```ts 
function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

Complexity O($\sqrt{n}$)

### Power of 2

Number of the form 2<sup>n</sup> where n is an integer.

```ts
function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2) {
      return false;
    }

    n /= 2;
  }

  return true;
}
```

Complexity O(log(n))

### Pawer of 2 Bitwise version

```ts
function isPowerOfTwoBitwise(n: number): boolean {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
```

Complexity O(1)


## Recursion

Function that calls itsef in order to reduce a problem into smaller parts.

### Fibonacci number

```ts
function fibonacciRec(n: number): number {
  if (n < 2) {
    return n;
  }

  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}
```

- Time compexity: O(n)
- Space complexity: O(n)

### Factorial recursive

```ts
function factorialRec(n: number): number {
  if (n < 1) {
    return 1;
  }

  return n * factorialRec(n - 1);
}
```

- Time compexity: O(n)
- Space complexity: O(n)

## Search

### Linear search

Returns the index of the target element from the collection or -1 if not present.
Complexity O(n)

```ts
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```

### Binary search

Works only with **sorted** collections. 
If array is empty returns 1. Otherwise, find middle element and returns it if equal to target one. 
If target element is less than target, compute binary search on left side of array.
If target element is greater than target, compute binary search on right side.

```ts
function binarySearch(arr: number[], target: number): number {
  // pointers
  let leftIdx = 0;
  let rightIdx = arr.length;

  while (leftIdx <= rightIdx) {
    // compute middle index
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    // return if middle idex is equal to target
    if (target === arr[midIdx]) {
      return midIdx;
    }

    // compute new indexes comparing middle value with target
    if (target < arr[midIdx]) {
      // left side
      rightIdx = midIdx - 1;
    } else {
      // right side
      leftIdx = midIdx + 1;
    }
  }

  return -1;
}
```

Complexity O(log(n))

### Binary search (recursive version)

```ts 
function search(
  arr: number[],
  target: number,
  leftIdx: number,
  rightIdx: number
) {
  if (leftIdx > rightIdx) {
    return -1;
  }

  let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (target === arr[midIdx]) {
    return midIdx;
  }

  if (target < arr[midIdx]) {
    return search(arr, target, leftIdx, midIdx - 1);
  } else {
    return search(arr, target, midIdx + 1, rightIdx);
  }
}

function binarySearchRec(arr: number[], target: number) {
  return search(arr, target, 0, arr.length - 1);
}
```

Complexity: O(log(n))

## Sorting

Given an array of numbers, sort it in ascending order.

### Bubble sort

Compares adjacent elements and swap them if not sorted.

```ts 
function bubbleSort(arr: number[]): number[] {
  let tmp: number;
  let swapped: boolean;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      // swap adjacent if not ordered
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
```

Complexity O(n<sup>2</sup>)

### Insertion sort

Assume a portion as sorted: if next element is greater than sorted part, go to next element, otherwise shift larger part to the right

```ts
function insertionSort(arr: number[]): number[] {
  let toInsert: number;
  let j: number;

  for (let i = 0; i < arr.length; i++) {
    toInsert = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > toInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = toInsert;
  }

  return arr;
}
```

Complexity: O(n<sup>2</sup>)

### Quick sort 

Find a pivot element (first, last, random or median) and put everything smaller that pivot to the left, greatest to the right. 
Repeat with recursion until all arrays have lenght 1 and concatenate them from left to right.

```ts
function quickSort(arr: number[]): number[] {
  // single element array
  if (arr.length < 2) {
    return arr;
  }

  // general case
  let pivot: number = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

Complexity: O(n<sup>2</sup>) if array already sorted, O(nlog(n)) for average case

### Merge sort

Divide the array into mutliple sub arrays of length 1; repetly merge the sub arrays into sorted arrays.

```ts
function merge(leftArr: number[], rightArr: number[]): number[] {
  const sortedArr: number[] = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      const first = leftArr.shift();
      if (first) {
        sortedArr.push(first);
      }
    } else {
      const first = rightArr.shift();
      if (first) {
        sortedArr.push(first);
      }
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(leftArr, rightArr);
}
```

Complexity O(nlog(n))

## Misc

### Cartesian product

Traverse each array and pair each element with second array.

```ts
function cartsianProduct(arr1: number[], arr2: number[]): number[][] {
  const res: number[][] = [];

  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      res.push([el1, el2]);
    });
  });

  return res;
}
```

Complexity O(n*m)

### Climbing staircase

Given a staircase of n steps, count the numbers of distinct ways to reach the top with 1 or 2 steps at the time.

```ts
function climbingStaircase(n: number): number {
  const ways = [1, 2];

  for (let i = 2; i < n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n - 1];
}
```

Complexity O(n)

### Tower of Hanoi

Move the entire stack to the last rod.

```ts
function hanoiTower(
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) {
  if (n === 1) {
    logMove(n, fromRod, toRod);
    return;
  }

  hanoiTower(n - 1, fromRod, usingRod, toRod);
  logMove(n, fromRod, toRod);
  hanoiTower(n - 1, usingRod, toRod, fromRod);
}
```

Complexity O(2<sup>n</sup>)

## Algotirhm design techniques

### Brute force

Evaluate all possible solutions

### Greedy

Choose the best option at runtime

### Divice & Conquer

Divide problem into smaller parts and recombine partial solutions

### Dynamic programming

Memoization and reuse to improve time complexity

### Backtracking

Generate all possible solutions and check constraints: if not satisfied, backtrack to possible solutions

## Data structures

A way to store and organize data

### Arrays

Iterable zero-based collection of values

```ts
type Mixed = number | string;

const arr: Mixed[] = [1, 2, 3, "Mario"];

// add element to the end
arr.push(4);
// add element at the begining
arr.unshift(0);
// remove element at the end
arr.pop();
// remove element at the begining
arr.shift();

// iterate elements
for (const item of arr) {
  console.log(item);
}
```

Complexity
- Insert & remove from end: O(1)
- Insert & remove from begining: O(n) (must reset all remaining indexes)
- Access: O(1)
- Search: O(n)
- Push & Pop: O(1)
- forEach, map, filter, reduce: O(n)

### Object

Unordered, non iterable, collection of key-value pairs: key must be of type string or Symbol, value any type.

```ts
type Key = string;
type Value = any;

const person: Record<Key, Value> = {
  name: "Mario",
  age: 49,
  "key-there": true,
  // method
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

console.log("Name:", person.name);
console.log("key-three", person["key-there"]);

// add prop
person.hobby = "Music";
console.log(person);

// delete prop
delete person.hobby;
console.log(person);

// call method
person.sayName();
```

Complexity
- Insert prop: O(1)
- Remove prop: O(1)
- Access prop: O(1)
- Search prop: O(n)
- Object.keys: O(n)
- Object.values: O(n)
- Object.entries(): O(n)

### Set

A collection of unique iterable values.

#### Sev vs Array

- inserted order not mantained
- insert & delete faster 

```ts
const set: Set<number> = new Set();
// optional array params in Set constructor
const set2 = new Set([1, 2, 3]);

// add value
set.add(1);

// duplicated values are automatically ignores
set.add(1); // ignored
set.add(2);
set.add(3);

// delete value
set.add(4);
set.delete(4);

// iterable
for (const item of set) {
  console.log(item);
}

// size
console.log("set size:", set.size);

// clear all set values
set.clear();
console.log("set size:", set.size);
```

### Map

Ordered collection of key-value pairs: both of them can be of any type.
Key retrives its valus.
Maps are iterble.

#### Map vs Object

- Map ordered, Object not.
- Map key can be of any type, Object keys string and Symbol only.
- Map is itarable, object not.
- Map cannot contain methods.

```ts
// Map constructor has an array of tuples as optional parameter
const map = new Map<string, number>([
  ["a", 1],
  ["b", 2],
]);

// set key value
map.set("c", 3);

// check if key exists
if (map.has("c")) {
  console.log("Map has c");
}

// delete key
map.delete("c");

// iterable
for (const item of map) {
  console.log(item);
}

// array destructuring
for (const [key, val] of map) {
  console.log(`[${key} : ${val}]`);
}

// map size
console.log("Map size:", map.size);

// delete all keys
map.clear();
```

### Stack

Sequential collection of elements following LIFO principle.

- Push: add element
- Pop: remove element

### Queue

Sequential collection of elements following FIFO principle.

- Enqueue: add element
- Dequeue: remove element

```ts
class Queue<T> {
  private items: T[] = [];

  constructor(items: T[] = []) {
    this.items = items;
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}
```

### Circular queue

Fixed size queue with first element connected to last one (FIFO).

- Enqueue (pointer based)
- Dequeue (pointer based)

```ts
 class CircularQueue<T> {
  private capacity: number;
  private items: (T | undefined)[];
  private currentLength: number;
  private rear: number;
  private front: number;

  constructor(capacity: number = 0) {
    this.capacity = capacity;
    this.items = new Array<T>(capacity);
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element: T) {
    if (this.isEmpty()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      return console.log("Queue is empty");
    }

    let i: number;
    let str = "";

    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i];
    }
    str += this.items[i];

    console.log(str);
  }
}
```

### Linked list

Linear series of connected nodes. Each node contains a value and a pointer to next node.
Elements can be insterted or removed without reallocation.

- Insert element
- Delete element
- Search element

```ts

```