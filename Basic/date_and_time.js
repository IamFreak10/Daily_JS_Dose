let myDate=new Date();
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())


let myCreateDate=new Date(2026,5,29);
console.log(myCreateDate.toLocaleString())
console.log(myCreateDate.toDateString())

let myCreateDate1=new Date("06-29-2026")
console.log(myCreateDate.toLocaleString())

console.log(Math.floor(Date.now()/1000))
let newd=new Date()
console.log(newd.toDateString())
console.log(newd.getDay())
console.log(newd.getMonth())