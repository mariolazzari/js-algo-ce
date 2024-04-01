export function insertionSort(arr: number[]): number[] {
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
