/* 
Mini-Exercise:
*/

/* 1.Create a variable using let and reassign its value twice.*/

let fname = "Simon";
console.log("fname", fname); //Simon
fname = "Simone";
console.log("fname", fname); //Simone

/* 2.Declare an array using const, then add new elements to the array.*/

const fruits = ["Apple", "Banana", "Clementine", "Goyave"];

fruits.push("Lettuce");

console.log(fruits);

const lName = "Dam";
console.log(lName);

lName = "Deb";
console.log(lName); //TypeError: Assignment to constant variable
