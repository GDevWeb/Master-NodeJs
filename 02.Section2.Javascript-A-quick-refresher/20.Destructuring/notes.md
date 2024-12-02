# Section 2: JavaScript - A Quick Refresher

## **20. Destructuring**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561874#overview)
- [code](code/08-destructuring/08-destructuring/play.js)

---

#### **What Is Destructuring?**

Destructuring is a syntax in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise way.

---

### **Destructuring Arrays**

1. **Basic Array Destructuring:**

   ```javascript
   const numbers = [10, 20, 30];
   const [first, second, third] = numbers;

   console.log(first); // Output: 10
   console.log(second); // Output: 20
   console.log(third); // Output: 30
   ```

2. **Skipping Elements:**

   - You can skip unwanted elements using commas:
     ```javascript
     const [first, , third] = numbers;
     console.log(third); // Output: 30
     ```

3. **Using Default Values:**

   - Provide defaults for missing values:
     ```javascript
     const [a = 5, b = 10, c = 15] = [1, 2];
     console.log(c); // Output: 15
     ```

4. **Rest with Destructuring:**
   - Collect remaining elements using the rest operator:
     ```javascript
     const [head, ...tail] = numbers;
     console.log(head); // Output: 10
     console.log(tail); // Output: [20, 30]
     ```

---

### **Destructuring Objects**

1. **Basic Object Destructuring:**

   ```javascript
   const user = { name: "Alice", age: 25 };
   const { name, age } = user;

   console.log(name); // Output: Alice
   console.log(age); // Output: 25
   ```

2. **Renaming Variables:**

   - Assign new variable names to properties:
     ```javascript
     const { name: userName, age: userAge } = user;
     console.log(userName); // Output: Alice
     console.log(userAge); // Output: 25
     ```

3. **Using Default Values:**

   - Provide default values for missing properties:
     ```javascript
     const { name, city = "Unknown" } = user;
     console.log(city); // Output: Unknown
     ```

4. **Rest with Objects:**
   - Gather remaining properties into a new object:
     ```javascript
     const { name, ...details } = user;
     console.log(details); // Output: { age: 25 }
     ```

---

### **Destructuring in Function Parameters**

1. **Arrays in Function Parameters:**

   ```javascript
   const sum = ([a, b]) => a + b;
   console.log(sum([5, 10])); // Output: 15
   ```

2. **Objects in Function Parameters:**

   ```javascript
   const greet = ({ name, age }) => {
     console.log(`Hello, ${name}. You are ${age} years old.`);
   };

   greet({ name: "Alice", age: 25 }); // Output: Hello, Alice. You are 25 years old.
   ```

3. **Providing Default Values:**

   ```javascript
   const greet = ({ name = "Guest" } = {}) => {
     console.log(`Hello, ${name}!`);
   };

   greet(); // Output: Hello, Guest!
   ```

---

### **Nested Destructuring**

1. **Arrays within Arrays:**

   ```javascript
   const numbers = [1, [2, 3]];
   const [first, [second, third]] = numbers;

   console.log(second); // Output: 2
   ```

2. **Objects within Objects:**

   ```javascript
   const user = {
     name: "Alice",
     address: { city: "New York", zip: 10001 },
   };

   const {
     address: { city, zip },
   } = user;
   console.log(city); // Output: New York
   ```

---

### **Combining Destructuring with Spread**

1. **Extracting Elements While Cloning:**

   ```javascript
   const [head, ...rest] = [1, 2, 3, 4];
   console.log(head); // Output: 1
   console.log(rest); // Output: [2, 3, 4]
   ```

2. **Separating Properties While Cloning:**
   ```javascript
   const user = { name: "Alice", age: 25, city: "Paris" };
   const { city, ...others } = user;
   console.log(others); // Output: { name: "Alice", age: 25 }
   ```

---

### **Practical Examples**

1. **Swapping Variables:**

   ```javascript
   let a = 1,
     b = 2;
   [a, b] = [b, a];
   console.log(a, b); // Output: 2, 1
   ```

2. **Destructuring in Loops:**

   ```javascript
   const users = [
     { name: "Alice", age: 25 },
     { name: "Bob", age: 30 },
   ];

   for (const { name, age } of users) {
     console.log(`${name} is ${age} years old.`);
   }
   ```

---

### **Mini-Exercise**

1. Extract the first two elements from an array and collect the rest into a new array.
2. Destructure an object to extract specific properties, renaming one of them.
3. Write a function that takes a nested object as a parameter and destructures it to access deep properties.

---

### **Vocabulary for Technical English**

- **Destructuring:** A way to unpack values from arrays or objects.
- **Default Value:** A fallback value used if the property or element is undefined.
- **Nested:** A structure inside another structure (e.g., arrays or objects within objects).

---

Next, we’ll dive into **21. Functions, Prototypes & Classes**! Let me know when you're ready!
