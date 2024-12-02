/* 
**Mini-Exercise**


*/

/* 1. Extract the first two elements from an array and collect the rest into a new array.*/

const authors = ["Yan", "David", "Claire"];
console.log("authors", authors);

const [first, second, rest] = authors;

const newAuthors = [first, second];
console.log("newAuthors", newAuthors);

const restAuthor = [rest];
console.log("restAuthor", restAuthor);

/* 2. Destructure an object to extract specific properties, renaming one of them.*/

const car = {
  brand: "Citroën",
  model: "c4 picasso",
  year: 2009,
};

const { brand: branding, model, year } = car;

console.log("Branding:", branding);
console.log("Model", model);
console.log("Year", year);

/* 3. Write a function that takes a nested object as a parameter and destructures it to access deep properties.*/
function extractNestedProperties(person) {
  // Destructure the nested properties
  const {
    name,
    address: {
      city,
      country,
      zip: { code, extended },
    },
    contact: { phone, email },
  } = person;

  // Return or log the extracted values
  console.log("Name:", name);
  console.log("City:", city);
  console.log("Country:", country);
  console.log("Zip Code:", code);
  console.log("Extended Zip:", extended);
  console.log("Phone:", phone);
  console.log("Email:", email);

  return { name, city, country, code, extended, phone, email };
}

// Example usage
const person = {
  name: "John Doe",
  address: {
    city: "Paris",
    country: "France",
    zip: {
      code: "75001",
      extended: "1234",
    },
  },
  contact: {
    phone: "+33 123456789",
    email: "john.doe@example.com",
  },
};

const extractedData = extractNestedProperties(person);
console.log("Extracted Data:", extractedData);
