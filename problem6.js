// Problem 6: Sum of All Numbers in an Array
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let arry = [1, 2, 3, 4, 5];
let sum = sumArr(arry);
console.log(sum);
