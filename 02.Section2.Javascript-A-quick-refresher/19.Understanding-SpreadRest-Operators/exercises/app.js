/* 
Mini-Exercise
*/

/* 1.Create a function that takes any number of arguments and returns their product using the rest operator.*/
console.info("***1.Create a function that takes***");
const multiply = (...numbers) => {
  const product = [...numbers].forEach((number) => {});
};

/* 2.Merge two objects representing a user profile and user preferences using the spread operator.*/
console.info("***2.Merge two objects representing a user profile***");
const userProfile = { profile: "member" };
const userPreferences = { preferences: ["dark mode", "not notification"] };

const user = { ...userPreferences, ...userProfile };
console.log(user);

/* 3.Use array destructuring with rest to separate the first two elements of an array from the rest.*/

const groceryList = [
  "Ananas",
  "Clementine",
  "Banana",
  "Carrot",
  "Lettuce",
  "Spinach",
];

const [first, second, ...rest] = groceryList;

console.log("First element:", first);
console.log("Second element:", second);
