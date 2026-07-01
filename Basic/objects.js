// Singleton
// Object.create

//Objects Literals
const mySym=Symbol("key")
const JsUser={
name:"Mahfuj",
age:18,
"full name":"Mahfuj Abdullah",
location:"Barishal",
isLoggedIn:false,
lastLoginDays:["Sat","Mon"],
// mySym:"MyKy1" its a string not symbol
[mySym]:"key1"
}

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


JsUser.greetings=function(){
    console.log("Hello JS User")
}
JsUser.greetingsTwo=function(){
    console.log(`hello Js ,${this.name}`)
}

// console.log(JsUser.greetings()) is not a function
// console.log(JsUser.greetings) Functions reference 
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())