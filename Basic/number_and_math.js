const score=400;
const balance=new Number(100.5455);
console.log(balance.toFixed(2));

const otherNumber=123.8954;
console.log(otherNumber.toPrecision(3)); 
//js just plus + er shomoy problem kore,because it is both concation and addition
const bigNumber=100000000
// console.log(bigNumber.toLocaleString('en-IN'))

// console.log(Math)
const randomNumber=Math.floor(Math.random()*10);
// console.log(randomNumber);

let min=0;
let max=6;
const diceNumber=Math.floor(Math.random()*(max-min+1)+min)
console.log(diceNumber);