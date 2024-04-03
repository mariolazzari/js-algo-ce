// Map constructor has an array of tuples as optional parameter
const map = new Map<string, number>([
  ["a", 1],
  ["b", 2],
]);

// set key value
map.set("c", 3);

// check if key exists
if (map.has("c")) {
  console.log("Map has c");
}

// delete key
map.delete("c");

// iterable
for (const item of map) {
  console.log(item);
}

// array destructuring
for (const [key, val] of map) {
  console.log(`[${key} : ${val}]`);
}

// map size
console.log("Map size:", map.size);

// delete all keys
map.clear();
