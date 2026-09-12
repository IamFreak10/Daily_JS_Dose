function sayMyName() {
  console.log('M');
  console.log('A');
  console.log('H');
  console.log('F');
  console.log('U');
  console.log('J');
}

//referenec +execution()
// sayMyName();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }
function add(num1, num2) {
  let result = num1 + num2;
  return result;
  console.log(result);
}
let b = add(3, 4);
// console.log(b);
function loginMessage(username = 'user') {
  if (!username) {
    console.log('Please enter username');
    return;
  }
  return `Login Successfull ${username}`;
}
console.log(loginMessage('Mahfuj'));
console.log(loginMessage());
