// conversion and declareeation

let score="33aa"
// console.log(typeof score) !string
let valueInNumber=Number(score)
// console.log(typeof valueInNumber) // its a number which value is NaN
// console.log(valueInNumber)

// let score2=null
// console.log(typeof score2) //!object
// let valueInNumber2=Number(score2)
// console.log(typeof valueInNumber2) // its a number which value is 0
// console.log(valueInNumber2) //o
// let score2=undefined
// console.log(typeof score2) //!undefined
// let valueInNumber2=Number(score2)
// console.log(typeof valueInNumber2) // its a number which value is NaN
// console.log(valueInNumber2) //nan

/*
====================================================================================
                             JavaScript Number Conversion
====================================================================================
| মূল ভ্যালু (Input)             | টাইপ (typeof) | Number() রূপান্তর টাইপ | রূপান্তর মান (Value)   |
|------------------------------|--------------|---------------------|-------------------|
| "33" (বিশুদ্ধ সংখ্যা স্ট্রিং)         | string       | number              | 33                |
| "33aa" (আলফানিউমেরিক স্ট্রিং)    | string       | number              | NaN (Not a Number)|
| null                         | object       | number              | 0                 |
| undefined                    | undefined    | number              | NaN               |
| true                         | boolean      | number              | 1                 |
| false                        | boolean      | number              | 0                 |
====================================================================================
*/