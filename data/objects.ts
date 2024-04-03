type Key = string;
type Value = any;

const person: Record<Key, Value> = {
  name: "Mario",
  age: 49,
  "key-there": true,
  // method
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

console.log("Name:", person.name);
console.log("key-three", person["key-there"]);

// add prop
person.hobby = "Music";
console.log(person);

// delete prop
delete person.hobby;
console.log(person);

// call method
person.sayName();
