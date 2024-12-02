/* 
Mini-Exercise
*/

/* 1.Create an array of numbers and find the sum of all even numbers using filter and reduce.*/

console.info("***Exercice 1***");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const sumOfEvenNumbers = numbers
  .filter((number) => number % 2 === 0)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sumOfEvenNumbers);

/* 2.Use map to create a new array with each number squared, then sort it in descending order.*/

console.info("***Exercice 2***");
const squaredAndUnorderedNumbers = numbers
  .map((number) => number * number)
  .sort((a, b) => b - a);

console.log(squaredAndUnorderedNumbers);

/* 3.Create an array of names and filter out names shorter than 5 characters.*/

console.info("***Exercice 3***");

const names = [
  "Ali",
  "Bob",
  "Balder",
  "Charles",
  "Dominique",
  "Eleanor",
  "Fabienne",
];

const filteredNamesShorter5Characters = names.filter((name) => name.length < 5);
console.log(filteredNamesShorter5Characters);
