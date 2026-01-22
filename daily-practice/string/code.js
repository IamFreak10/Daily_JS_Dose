let str = 'Hello';
str[0] = 'Y';
// console.log(str); // Hello
str = 'Mahfuj';
// console.log(str); // Mahfuj
'hello'.toUpperCase(); // HELLO
'HELLO'.toLowerCase(); // hello
let str1 = '   Mahfuj';
let b = str1.trim(); // Mahfuj

//! trim return new string not mutate the original string
//? Search:
let str2 = 'I love JavaScript';
console.log(str2.includes('JavaScript')); // true
console.log(str2.indexOf('JavaScript')); // 7
str.startsWith('I'); // true
str.endsWith('Script'); // true

// ? Replace:
let str3 = 'I love JavaScript';
console.log(str3.replace('love', 'hate'));
console.log(str3.replaceAll('a', 'A'));
