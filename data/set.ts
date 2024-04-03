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
