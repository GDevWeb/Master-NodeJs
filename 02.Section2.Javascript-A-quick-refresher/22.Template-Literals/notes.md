# Section 2: JavaScript - A Quick Refresher

## **22. Template Literals**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12270378#overview)

---

### **What Are Template Literals?**

Template literals, introduced in ES6, are a way to create strings in JavaScript that allow for easier string interpolation, multiline strings, and embedding of expressions. They use backticks (\``) instead of quotes (`'`or`"`).

---

### **Key Features of Template Literals**

1. **String Interpolation:**

   - Embed variables or expressions directly into strings using `${}`.

   ```javascript
   const name = "Alice";
   const age = 25;

   const message = `Hello, my name is ${name} and I am ${age} years old.`;
   console.log(message);
   // Output: Hello, my name is Alice and I am 25 years old.
   ```

2. **Multiline Strings:**

   - Create multiline strings without using escape characters (`\n`).

   ```javascript
   const multiline = `This is a
   multiline string.`;

   console.log(multiline);
   // Output:
   // This is a
   // multiline string.
   ```

3. **Expression Embedding:**

   - Embed any valid JavaScript expression:

   ```javascript
   const num1 = 5;
   const num2 = 10;

   const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
   console.log(result);
   // Output: The sum of 5 and 10 is 15.
   ```

4. **Tagged Templates:**

   - Use a function to process a template literal.

   ```javascript
   const highlight = (strings, ...values) => {
     return strings.reduce(
       (result, str, i) => `${result}${str}<b>${values[i] || ""}</b>`,
       ""
     );
   };

   const user = "Alice";
   const age = 25;

   const taggedResult = highlight`User: ${user}, Age: ${age}`;
   console.log(taggedResult);
   // Output: User: <b>Alice</b>, Age: <b>25</b>
   ```

---

### **Practical Examples**

1. **Dynamic Strings in Functions:**

   ```javascript
   const greet = (name) => `Hello, ${name}!`;
   console.log(greet("Bob")); // Output: Hello, Bob!
   ```

2. **Creating HTML Templates:**

   ```javascript
   const title = "My Blog Post";
   const content = "This is the content of the blog post.";

   const html = `
     <article>
       <h1>${title}</h1>
       <p>${content}</p>
     </article>
   `;

   console.log(html);
   ```

3. **Using Expressions:**

   ```javascript
   const price = 20;
   const discount = 0.1;

   const finalPrice = `The final price is $${(price * (1 - discount)).toFixed(
     2
   )}.`;
   console.log(finalPrice);
   // Output: The final price is $18.00.
   ```

---

### **Best Practices**

1. Use template literals for:

   - Strings requiring dynamic content.
   - Multiline strings.
   - Strings involving calculations or complex expressions.

2. Avoid using template literals for simple static strings:
   ```javascript
   const staticString = "Hello, World!"; // Better than using backticks.
   ```

---

### **Mini-Exercise**

1. Write a function that accepts a name and age as arguments and returns a formatted message using template literals.
2. Create a simple HTML structure using template literals, including dynamic content for a title and description.
3. Use a tagged template to format a string that highlights specific words in bold.

---

### **Vocabulary for Technical English**

- **Interpolation:** Inserting variables or expressions into a string.
- **Multiline String:** A string that spans multiple lines.
- **Tagged Template:** A function that processes a template literal.

---
