export function binarySearch(arr: number[], target: number): number {
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

export function binarySearchRec(arr: number[], target: number) {
  return search(arr, target, 0, arr.length - 1);
}
