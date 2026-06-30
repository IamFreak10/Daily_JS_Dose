//array
let array=[1,2,3,4,5]
//shallow copy:same reference share kore
let b=array;
// b.push(6)
// console.log(array)
// [ 1, 2, 3, 4, 5, 6 ] 

const myArr=new Array(1,2,3,4,5)

// Array Methods:
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9)
console.log(myArr) //ekta hoile thik but onek unshift hhole problem,optimized na

myArr.shift()
console.log(myArr)


const marvel_heros=["thor","spiderman","ironman"]
const dc=["superman","flash","batman"]
// const mc=marvel_heros.splice(0,2,"Hulk","Stephen Starnge");
// The splice() method of Array instances changes the 
// contents of an array by removing or 
// replacing existing elements and/or adding new elements in place.,
// returns 
// // an array with deletd items
// console.log(marvel_heros)
// console.log(mc)

//slice doesnot modify the array ,
// return extracts a portion of an array 
// and returns it as a new array without modifying the original data
// const dcd=dc.slice(0,2)
// console.log(dc)
// console.log(dcd)
// marvel_heros.push(dc);
// console.log(marvel_heros[3][1])

const conacated=marvel_heros.concat(dc)
// console.log(conacated)
//concat returns neww concated array but does not manuplutae rela array

const united=[...marvel_heros,...dc]
// console.log(united)
//flatmap
const preFlat= [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// console.log(preFlat.flat(Infinity))
console.log(Array.isArray("Mahfuj"))
console.log(Array.from("Mahfuj"))
console.log(Array.from({name:"Mahfuj"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))