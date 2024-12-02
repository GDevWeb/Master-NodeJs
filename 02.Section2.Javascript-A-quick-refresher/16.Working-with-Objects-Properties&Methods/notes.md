# Section 2: JavaScript - A Quick Refresher

## **16. Working with Objects, Properties, and Methods**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561866#overview)
- [Academind - Reference Vs Primitives values](https://academind.com/tutorials/reference-vs-primitive-values)

---

### **What Are Objects in JavaScript?**

Objects in JavaScript are collections of key-value pairs. They allow you to group related data and functions (methods) into a single entity.

---

#### **Creating Objects**

1. **Object Literal Syntax:**

   ```javascript
   const person = {
     name: "Alice",
     age: 30,
     isEmployed: true,
   };
   console.log(person.name); // Output: Alice
   ```

2. **Using `new Object()`:**
   - Less commonly used but still valid:
     ```javascript
     const car = new Object();
     car.brand = "Toyota";
     car.year = 2021;
     console.log(car.brand); // Output: Toyota
     ```

---

#### **Accessing Properties**

1. **Dot Notation:**

   ```javascript
   console.log(person.name); // Output: Alice
   ```

2. **Bracket Notation:**
   - Useful for dynamic property names:
     ```javascript
     const propertyName = "age";
     console.log(person[propertyName]); // Output: 30
     ```

---

#### **Adding, Updating, and Deleting Properties**

1. **Adding/Updating Properties:**

   - Use dot or bracket notation:
     ```javascript
     person.city = "New York";
     person.age = 31;
     console.log(person.city); // Output: New York
     ```

2. **Deleting Properties:**
   - Use the `delete` operator:
     ```javascript
     delete person.isEmployed;
     console.log(person.isEmployed); // Output: undefined
     ```

---

#### **Object Methods**

1. **What Are Methods?**

   - Methods are functions stored as properties inside an object.
   - Example:

     ```javascript
     const calculator = {
       add: (a, b) => a + b,
       subtract(a, b) {
         return a - b;
       },
     };

     console.log(calculator.add(5, 3)); // Output: 8
     console.log(calculator.subtract(5, 3)); // Output: 2
     ```

2. **The `this` Keyword:**

   - `this` refers to the object calling the method.
   - Example:

     ```javascript
     const user = {
       name: "John",
       greet() {
         console.log(`Hello, my name is ${this.name}`);
       },
     };

     user.greet(); // Output: Hello, my name is John
     ```

   - **Arrow Functions and `this`:**
     Arrow functions do not bind their own `this`, so avoid using them for methods:

     ```javascript
     const wrongUser = {
       name: "Jane",
       greet: () => console.log(`Hello, my name is ${this.name}`),
     };

     wrongUser.greet(); // Output: Hello, my name is undefined
     ```

---

#### **Iterating Over Objects**

1. **Using `for...in`:**

   - Iterate through object properties:
     ```javascript
     for (let key in person) {
       console.log(`${key}: ${person[key]}`);
     }
     ```

2. **Object Methods for Iteration:**

   - `Object.keys()`:

     ```javascript
     const keys = Object.keys(person);
     console.log(keys); // Output: ["name", "age", "city"]
     ```

   - `Object.values()`:

     ```javascript
     const values = Object.values(person);
     console.log(values); // Output: ["Alice", 31, "New York"]
     ```

   - `Object.entries()`:
     ```javascript
     const entries = Object.entries(person);
     console.log(entries); // Output: [["name", "Alice"], ["age", 31], ["city", "New York"]]
     ```

---

#### **Object Destructuring**

Destructuring is a concise way to extract properties from objects.

1. **Basic Destructuring:**

   ```javascript
   const { name, age } = person;
   console.log(name); // Output: Alice
   console.log(age); // Output: 31
   ```

2. **Renaming Properties:**

   ```javascript
   const { name: userName, age: userAge } = person;
   console.log(userName); // Output: Alice
   ```

3. **Default Values:**
   ```javascript
   const { isEmployed = false } = person;
   console.log(isEmployed); // Output: false
   ```

---

#### **Shorthand for Properties and Methods**

1. **Property Shorthand:**

   - If the key and variable name are the same, you can use shorthand:
     ```javascript
     const name = "Alice";
     const age = 30;
     const person = { name, age };
     console.log(person); // Output: { name: "Alice", age: 30 }
     ```

2. **Method Shorthand:**

   - Instead of `greet: function()`, write:

     ```javascript
     const user = {
       greet() {
         console.log("Hello!");
       },
     };

     user.greet(); // Output: Hello!
     ```

---

#### **Mini-Exercise**

1. Create an object representing a book with properties like `title`, `author`, and `yearPublished`. Add a method to display the book’s details.
2. Add a new property to the object dynamically, then log the updated object.
3. Use `for...in` or `Object.keys()` to iterate over the object properties.

---

#### **Vocabulary for Technical English**

- **Property:** A key-value pair in an object.
- **Method:** A function that is a property of an object.
- **Dynamic:** Created or modified during runtime.

---
