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