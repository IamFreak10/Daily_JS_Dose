// Singleton
// Object.create

//Objects Literals
const mySym = Symbol('key');
const JsUser = {
  name: 'Mahfuj',
  age: 18,
  'full name': 'Mahfuj Abdullah',
  location: 'Barishal',
  isLoggedIn: false,
  lastLoginDays: ['Sat', 'Mon'],
  // mySym:"MyKy1" its a string not symbol
  [mySym]: 'key1',
};

// console.log(JsUser.location)
// console.log(JsUser["name"])
// console.log(JsUser["full name"]) Kaj kore
// console.log(JsUser.full name) hobe na kaj
// console.log(typeof JsUser[mySym])

//Frezee kora
// Object.freeze(JsUser)
// JsUser["full name"]="Meaw Biral"
// console.log(typeof JsUser[mySym])
// console.log(JsUser) Mahfuj Stays

JsUser.greetings = function () {
  console.log('Hello JS User');
};
JsUser.greetingsTwo = function () {
  console.log(`hello Js ,${this.name}`);
};

// console.log(JsUser.greetings())
// is not a function
// console.log(JsUser.greetings)
//  Functions reference
// console.log(JsUser.greetings())
// console.log(JsUser.greetingsTwo())

// Singleton
// const tinder=new Object()
//non singleton
const tinder = {};
tinder.id = '1223abc';
tinder.name = 'Meaw Biral';
tinder.isLoggedIn = false;
// console.log(tinder)
const regularUser = {
  email: 'agge@',
  fullName: {
    userName: {
      // firstName:"Hola",
      lastName: 'Biral',
    },
  },
};
// console.log(regularUser?.fullName?.userName?.firstName);
// //returns undefined

// Object assign
// The Object.assign() static method copies all
// enumerable own properties from one or more source
// objects to a target object.
//  It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({}, target, source);
console.log(returnedTarget);

console.log(returnedTarget === target);
// Expected output: false

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // In This case Expected output: true

// But use this spred operator
const st = { ...target, ...source };
// console.log(st);
const users = [
  {
    id: 1,
    email: 'Mahfuj@gmail',
  },
];
console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


// #######**********Object Destructuring***************#######
const myObj={
    name:"Biral",
    age:3
}
const{name,age}=myObj
console.log(name,age)
