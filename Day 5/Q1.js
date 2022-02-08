// Anonymous function

// a) Print odd numbers in an array

// let oddNumbers = function (arr) {
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

// let titleCase = function (str) {
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

// let prime = function(arr) {
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

// let isPalindrome = function (s, i) {
//   return (
//     (i = i || 0) < 0 ||
//     i >= s.length >> 1 ||
//     (s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i))
//   );
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("Guvi"));

// f) Return median of two sorted arrays of the same size

// let getMedian = function (ar1, ar2, n) {
//   let j = 0;
//   let i = n - 1;
//   while (ar1[i] > ar2[j] && j < n && i > -1) {
//     let temp = ar1[i];
//     ar1[i] = ar2[j];
//     ar2[j] = temp;
//     i--;
//     j++;
//   }
//   ar1.sort(function (a, b) {
//     return a - b;
//   });
//   ar2.sort(function (a, b) {
//     return a - b;
//   });
//   return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
// };

// let ar1 = [1, 12, 15, 26, 38];
// let ar2 = [2, 13, 17, 30, 45];
// let n = 5

// console.log(getMedian(ar1, ar2, n));

// g) Remove duplicates from an array

// let onlyUnique = function (value, index, self) {
//   return self.indexOf(value) === index;
// };

// let a = ["a", 1, "a", 2, "1"];
// var unique = a.filter(onlyUnique);

// console.log(unique);

// h) Rotate an array by k times

// function arrayRotate(arr, count) {
//   count -= arr.length * Math.floor(count / arr.length);
//   arr.push.apply(arr, arr.splice(0, count));
//   return arr;
// }

// console.log(arrayRotate(["🧡","💚","💙","💜","🖤"], 6))

// IIFE (Immediately Invoked Function Expression)

// a) Print odd numbers in an array

// (function (arr) {
//   let odd = [];
//   for (let i of arr) {
//     if (i % 2 !== 0) {
//       odd.push(i);
//     }
//   }
//   console.log(odd);
// })([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

// b) Convert all the strings to title caps in a string array

// (function (str) {
//   console.log(str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase()));
// })("iNcrEdible hulK");

// c) Sum of all numbers in an array

// (function(arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;
//     }
//     console.log(sum);
// })([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

// d) Return all the prime numbers in an array

// (function(arr) {
//     console.log(arr.filter((n) => {
//         for(i = 2; i<n; i++){
//             if(n % i === 0){
//                 return false;
//             }
//         }
//         return n > 1;
//     }));
// })([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

// e) Return all the palindromes in an array

// (function(str) { //function that checks if palindrome or not
//     console.log(str == str.split('').reverse().join(''));
// })("racecar");

// f) Return median of two sorted arrays of the same size

// (function (ar1, ar2, n) {
//   let j = 0;
//   let i = n - 1;
//   while (ar1[i] > ar2[j] && j < n && i > -1) {
//     let temp = ar1[i];
//     ar1[i] = ar2[j];
//     ar2[j] = temp;
//     i--;
//     j++;
//   }
//   ar1.sort(function (a, b) {
//     return a - b;
//   });
//   ar2.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(parseInt((ar1[n - 1] + ar2[0]) / 2, 10));
// })([1, 12, 15, 26, 38], [2, 13, 17, 30, 45], 5);

// g) Remove duplicates from an array

// (function(a) {
//     var seen = {};
//     var out = [];
//     var len = a.length;
//     var j = 0;
//     for(var i = 0; i < len; i++) {
//          var item = a[i];
//          if(seen[item] !== 1) {
//                seen[item] = 1;
//                out[j++] = item;
//          }
//     }
//     console.log(out);
// })(["a", 1, "a", 2]);

// h) Rotate an array by k times

// (function(arr, count) {
//   count -= arr.length * Math.floor(count / arr.length);
//   arr.push.apply(arr, arr.splice(0, count));
//   console.log(arr);
// })(["🧡","💚","💙","💜","🖤"], 6);