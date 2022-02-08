// a) Print odd numbers in an array

// let oddNumbers = (arr) => {
//   let odd = [];
//   for (let i of arr) {
//     if (i % 2 !== 0) {
//       odd.push(i);
//     }
//   }
//   console.log(odd);
// };

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// oddNumbers(arr);

// b) Convert all the strings to title caps in a string array

// let titleCase = (str) => {
//   console.log(str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase()));
// };

// titleCase("iron man");
// titleCase("iNcrEdible hulK");

// c) Sum of all numbers in an array

// let sumOfNums = function(arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;
//     }
//     console.log(sum);
// }

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// sumOfNums(arr);

// d) Return all the prime numbers in an array

// let prime = (arr) => {
//     return arr.filter((n) => {
//         for(i = 2; i<n; i++){
//             if(n % i === 0){
//                 return false;
//             }
//         }
//         return n > 1;
//     })
// }

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(prime(arr));

// e) Return all the palindromes in an array

// let isPalindrome = (s, i) => {
//   return (
//     (i = i || 0) < 0 ||
//     i >= s.length >> 1 ||
//     (s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i))
//   );
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("Guvi"));