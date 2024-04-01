export function quickSort(arr: number[]): number[] {
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
