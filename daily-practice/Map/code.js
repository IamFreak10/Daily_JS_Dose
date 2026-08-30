/* Map
 ├── [ key1 , value1 ]
 ├── [ key2 , value2 ]
 ├── [ key3 , value3 ]
 */


//  ! js enternal:
/* Map {
  [[Entries]]: [
    ["name", "Mahfuj"],
    ["age", 23],
    [true, "Yes"]
  ]
}
 */

// Create a new Map
let myMap = new Map();

// Set values
myMap.set('name', 'Mahfuj');
myMap.set('age', 23);
myMap.set(true, 'Boolean Key');

// Get values
// console.log(myMap.get('name')); // Mahfuj
// console.log(myMap.get(true)); // Boolean Key

// Check key existence
// console.log(myMap.has('age')); // true

// Size of map
// console.log(myMap.size); // 3

// Delete a key
myMap.delete('age');
// console.log(myMap.has('age')); // false

// Loop through Map
myMap.forEach((value, key) => {
  // console.log(key, value);
});

// Using for..of
for (let [key, value] of myMap) {
  // console.log(key, value);
}
let objKey = { id: 1 };
let arrKey = [1, 2, 3];
let advancedMap = new Map();
advancedMap.set(objKey, { name: 'Object Key', id: 1, hashCode: 1 });
console.log(advancedMap.get(objKey)); // Object Key

// Converting Map to Array
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let map = new Map(arr);
console.log(map);
let map2 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
console.log(Array.from(map2).flat(Infinity));

