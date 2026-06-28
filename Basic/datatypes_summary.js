//call by values and call by reference,primitive and non primitive
//Primitive:
//7 catagory:string,Number,Boolean,null,undefined,symbol(Unique value,component can be unique in react.js) BigInt

//Reference Type(Non Primitive)
//Array,Objects,Functions,returns object


//Is Javascript Dynamic or static type?? dynamic datatype,singlethreaded,interprated,multipradiagram

const heroes=["Man","Woman","Cat"]

let myObj={
    name:"Biral",
    age:3
}

const myFunction=function(){
    console.log("Print Hello");
}

console.log(typeof myFunction);
console.log(typeof null)
console.log(typeof NaN)
console.log(typeof myObj)

//***********/

//Stack,heap memory
//primitive->stack,Heap(non-primitive)

let myName="Mahfuj";
let anotherName=myName;

anotherName="Abdullah"
console.log(myName);
console.log(anotherName);

let userOne={
    name:"Biral Meaw",
    age:12
};

let userTwo=userOne;
userTwo.name="Meaw Biral"
console.log(userOne);
console.log(userTwo);
