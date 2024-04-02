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
