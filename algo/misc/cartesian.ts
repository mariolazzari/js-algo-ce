export function cartsianProduct(arr1: number[], arr2: number[]): number[][] {
  const res: number[][] = [];

  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      res.push([el1, el2]);
    });
  });

  return res;
}
