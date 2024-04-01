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

export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(leftArr, rightArr);
}
