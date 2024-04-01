- [TypeScript Algorithms](#typescript-algorithms)
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

# TypeScript Algorithms

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