const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

let myList = fruits.toString();
// console.log(myList); // Banana,Orange,Apple,Mango

const myList2 = fruits.join('->');
// console.log(myList2);

// ? push()- adds new elements to the end of an array
// ? unshift()- adds new elements to the beginning of an array
// ! pop()- removes the last element from an array and returns that element
// ! shift()- removes the first element from an array and returns that element
fruits[fruits.length] = 'Kiwi';
// console.log(fruits);

const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const arr3 = ['Robin', 'Morgan'];
const myChildren = arr1.concat(arr2, arr3);
const myChildren2 = myChildren.concat('Mahfuj');
// console.log(myChildren2); //!Returns a new array,not modify the original array
// ** concat()- joins two or more arrays,and returns a new array

// fruits.copyWithin(4, 0);
// console.log(fruits);
// fruits.copyWithin(2, 0, 2);
// console.log(fruits);
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, [9, 10, [11, 12]]],
];
const newArr = myArr.flat(Infinity);
// console.log(newArr);

const fruits2 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits2.slice(3); //?Slice out a part of an array starting from array element 3 ("Apple"):
const citrus2 = fruits2.slice(1, 2); //?The method then selects elements from the start argument, and up to (but not including) the end argument.["orange"]
// console.log(citrus2);
const copArray = ['q', 'w', 'e', 'r', 't','y'];
// sow output ertert
copArray.copyWithin(0, 2, 5);

console.log(copArray);
