export function bubbleSort(arr: number[]): number[] {
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
