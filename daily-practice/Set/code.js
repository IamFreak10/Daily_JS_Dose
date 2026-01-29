/*************************************************
 * JavaScript Set – Full Example with Comments
 *************************************************/

// Step 1: একটি array যেখানে duplicate আছে
const numbers = [1, 2, 2, 3, 4, 4, 5];

// Step 2: Set বানানো
// Set automatically duplicate value remove করে
const uniqueSet = new Set(numbers);

// Step 3: Set print করা
console.log(uniqueSet); 
// Output: Set { 1, 2, 3, 4, 5 }

// Step 4: Set এ নতুন value যোগ করা
uniqueSet.add(6);        // 6 যোগ হলো
uniqueSet.add(3);        // 3 আগেই আছে, তাই যোগ হবে না

// Step 5: value আছে কিনা check করা
console.log(uniqueSet.has(4)); // true
console.log(uniqueSet.has(10)); // false

// Step 6: size দেখা
console.log(uniqueSet.size); // 6

// Step 7: Loop করে সব value দেখানো
for (let value of uniqueSet) {
  console.log(value);
}

// Step 8: একটা value delete করা
uniqueSet.delete(2); // 2 remove হবে

// Step 9: আবার print
console.log(uniqueSet); 
// Output: Set { 1, 3, 4, 5, 6 }

// Step 10: Set → Array convert করা
// Spread operator ব্যবহার করে
const uniqueArray = [...uniqueSet];

console.log(uniqueArray); 
// Output: [1, 3, 4, 5, 6]

// Step 11: Real use case
// User input থেকে duplicate email remove করা
const emails = [
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com"
];

// Duplicate remove
const uniqueEmails = [...new Set(emails)];

console.log(uniqueEmails);
// Output: ["a@gmail.com", "b@gmail.com", "c@gmail.com"]

/*************************************************
 * Key Notes:
 * - Set unique value রাখে
 * - Duplicate auto remove হয়
 * - has() fast search দেয়
 * - index নাই
 *************************************************/
