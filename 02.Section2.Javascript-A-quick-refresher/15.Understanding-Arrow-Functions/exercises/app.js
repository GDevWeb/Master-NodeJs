/* 
Mini-Exercise
*/

/* 1.Write an arrow function that takes a string and returns its uppercase version.*/

console.info(
  "***/* 1.Write an arrow function that takes a string and returns its uppercase version.****"
);
const convertToUpperCase = (string) => string.toUpperCase();
const str = "hello world";
const result = convertToUpperCase(str);
console.log(result);

/* 2.Create an arrow function that calculates the factorial of a number using recursion.*/

console.info(
  "***2.Create an arrow function that calculates the factorial of a number using recursion***"
);
const factorise = (number) => {
  if (number <= 1) {
    return 1;
  }
  const result = number * factorise(number - 1);

  return result;
};

const test = factorise(10);
console.log(test);
