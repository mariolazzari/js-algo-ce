# JavaScript Algorithms

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

O(n)

### Factorial

O(n)

### Prime number

Integers larger than the square root do not need to be checked

O(sqrt(n))

### Power of 2

O(log(n)) 
O(1) bitwise version

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