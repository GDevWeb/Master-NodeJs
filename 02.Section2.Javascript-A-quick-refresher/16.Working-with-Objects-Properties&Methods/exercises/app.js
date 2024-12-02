/* 
Mini-Exercise
*/

/* 1.Create an object representing a book with properties like title, author, and yearPublished. Add a method to display the book’s details.
 */

console.info("***1.Create an object representing a book***");
// 1.1 literal :
const book = {
  title: "Spiderman",
  author: "Stan Lee",
  yearPublished: "1963",
};
console.log(book);

console.info("***2.Add a new property to book***");
/* 2.Add a new property to the object dynamically, then log the updated object.*/
book.publisher = "Marvel";
console.log(book);

/* 3.Use for...in or Object.keys() to iterate over the object properties.*/
console.info("***Object.keys()***");
console.log(Object.keys(book));

console.info("***Use for...in***");
for (key in book) {
  console.log(key);
}

// 1.2 using class :
class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  displayBookDetail() {
    return `${this.title} has been written by ${this.author} - It was published in ${this.yearPublished} `;
  }
}

const newBook = new Book("The hobbit - the beginning", "Tolkien", 1953);
console.log(newBook.displayBookDetail());
