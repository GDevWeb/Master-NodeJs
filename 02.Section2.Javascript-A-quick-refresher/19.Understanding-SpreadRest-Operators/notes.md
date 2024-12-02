# Section 2: JavaScript - A Quick Refresher

## **19. Understanding Spread & Rest Operators**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561872#overview)
- [code](code/07-spread-and-rest/07-spread-and-rest/)

---

#### **What Are the Spread and Rest Operators?**

The **spread (`...`)** and **rest (`...`)** operators in JavaScript both use the same `...` syntax but serve different purposes based on the context in which they are used.

---

### **The Spread Operator (`...`)**

The spread operator is used to expand (or "spread") elements of an array, object, or other iterable into individual elements.

---

#### **Using Spread with Arrays**

1. **Copying Arrays (Shallow Copy):**

   ```javascript
   const numbers = [1, 2, 3];
   const newNumbers = [...numbers];
   console.log(newNumbers); // Output: [1, 2, 3]
   ```

2. **Merging Arrays:**

   ```javascript
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const mergedArray = [...arr1, ...arr2];
   console.log(mergedArray); // Output: [1, 2, 3, 4]
   ```

3. **Adding Elements to Arrays:**
   ```javascript
   const original = [2, 3, 4];
   const extended = [1, ...original, 5];
   console.log(extended); // Output: [1, 2, 3, 4, 5]
   ```

---

#### **Using Spread with Objects**

1. **Copying Objects (Shallow Copy):**

   ```javascript
   const user = { name: "Alice", age: 25 };
   const clonedUser = { ...user };
   console.log(clonedUser); // Output: { name: "Alice", age: 25 }
   ```

2. **Merging Objects:**

   ```javascript
   const obj1 = { a: 1, b: 2 };
   const obj2 = { b: 3, c: 4 };
   const mergedObject = { ...obj1, ...obj2 };
   console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }
   ```

3. **Adding/Overriding Properties:**
   ```javascript
   const user = { name: "Alice", age: 25 };
   const updatedUser = { ...user, age: 30, city: "New York" };
   console.log(updatedUser); // Output: { name: "Alice", age: 30, city: "New York" }
   ```

---

### **The Rest Operator (`...`)**

The rest operator collects multiple elements into an array or gathers remaining properties into an object. It’s commonly used in function arguments and destructuring.

---

#### **Using Rest in Functions**

1. **Collecting Function Arguments:**

   - Use `...` to gather all remaining arguments into a single array:

     ```javascript
     const sum = (...numbers) => {
       return numbers.reduce((a, b) => a + b, 0);
     };

     console.log(sum(1, 2, 3, 4)); // Output: 10
     ```

2. **Rest with Named Parameters:**

   ```javascript
   const introduce = (firstName, lastName, ...titles) => {
     console.log(`${firstName} ${lastName}, Titles: ${titles.join(", ")}`);
   };

   introduce("John", "Doe", "PhD", "Engineer", "Author");
   // Output: John Doe, Titles: PhD, Engineer, Author
   ```

---

#### **Using Rest in Destructuring**

1. **Array Destructuring:**

   - Collect remaining elements into a single array:
     ```javascript
     const [first, second, ...rest] = [1, 2, 3, 4, 5];
     console.log(first); // Output: 1
     console.log(second); // Output: 2
     console.log(rest); // Output: [3, 4, 5]
     ```

2. **Object Destructuring:**
   - Gather remaining properties into a new object:
     ```javascript
     const user = { name: "Alice", age: 25, city: "New York" };
     const { name, ...details } = user;
     console.log(name); // Output: Alice
     console.log(details); // Output: { age: 25, city: "New York" }
     ```

---

### **Key Differences Between Spread and Rest**

| Feature             | Spread Operator                         | Rest Operator                             |
| ------------------- | --------------------------------------- | ----------------------------------------- |
| **Purpose**         | Expands elements into individual values | Collects elements into an array or object |
| **Where It’s Used** | Arrays, objects, function calls         | Function parameters, destructuring        |

---

### **Practical Examples**

1. **Combining Spread and Rest:**

   ```javascript
   const modifyArray = (arr, ...newElements) => {
     return [...arr, ...newElements];
   };

   console.log(modifyArray([1, 2], 3, 4, 5));
   // Output: [1, 2, 3, 4, 5]
   ```

2. **Filtering Object Properties:**
   ```javascript
   const user = { id: 1, name: "Alice", password: "12345" };
   const { password, ...secureUser } = user;
   console.log(secureUser); // Output: { id: 1, name: "Alice" }
   ```

---

### **Mini-Exercise**

1. Create a function that takes any number of arguments and returns their product using the rest operator.
2. Merge two objects representing a user profile and user preferences using the spread operator.
3. Use array destructuring with rest to separate the first two elements of an array from the rest.

---

### **Vocabulary for Technical English**

- **Destructuring:** Extracting values from arrays or objects.
- **Expand:** Breaking down an iterable into its individual components.
- **Collect:** Gathering remaining elements into a single structure.

---
