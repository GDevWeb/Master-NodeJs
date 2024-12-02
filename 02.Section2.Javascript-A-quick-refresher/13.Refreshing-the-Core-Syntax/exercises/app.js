/* 
Mini-Exercise
*/

/* 
1.Write a function that takes an array of numbers and returns the sum of all numbers using the reduce method.

*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const sum = myNumbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
console.log(sum);

/* 
2.Create an object representing a book (with properties like 2.Create an object representing a book (with properties like title, author, and year), then destructure its properties into variables.
, author, and year), then destructure its properties into variables.

*/

const book = {
  title: "MAster nodejs",
  author: "Maximillian  Schwarzmüller",
  year: 2024,
};

const { title, author, year } = book;

console.log(title);
console.log(author);
console.log(year);
