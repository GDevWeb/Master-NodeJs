/* 
Exercises
*/

// 1. Create an array of objects representing books (title, author, year).
let bookNumber = 1; // Start book number at 1 for better readability.
const authors = ["Yan", "David", "Claire"];
let year = 2003;

const books = authors.map((author, index) => {
  return {
    title: `The book number #${bookNumber + index}`,
    author: author,
    year: year + index,
  };
});

console.log("Books array:", books);

/* 2. Clone the array and update the title of one book in the cloned version. */
const book = { title: "The book", author: "The author", year: 2003 };
console.log("Original book:", book);

const clonedBook = { ...book };
clonedBook.title = "The newBook";
console.log("Cloned book with updated title:", clonedBook);
console.log("Original book remains unchanged:", book);

/* 3. Verify that the original array is unchanged. */
console.info("*** Verify that the original array is unchanged ***");
console.log("Books array remains unchanged:", books);

/* 4. Deep clone a nested object and modify a property in the clone without affecting the original. */
const friends = { girlFriend: { name: "Sarah" } };

console.log("Original friends object:", friends);

// Correct way to deep clone:
const deepClonedFriends = JSON.parse(JSON.stringify(friends));
deepClonedFriends.girlFriend.name = "Christelle";

console.log("Deep cloned friends object with modification:", deepClonedFriends);
console.log("Original friends object remains unchanged:", friends);
