# Section 2: JavaScript - A Quick Refresher

## **18. Arrays, Objects & Reference Types**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561870#overview)

---

### **What Are Reference Types?**

In JavaScript, **reference types** (like arrays and objects) store references to memory locations, unlike **primitive types** (e.g., `string`, `number`, `boolean`) which store values directly.

1. **Primitive Types:**

   - Stored as values in memory.
   - Example:
     ```javascript
     let x = 10;
     let y = x;
     y = 20;
     console.log(x); // Output: 10 (x is unchanged)
     ```

2. **Reference Types:**
   - Store references (or pointers) to memory locations where the data is kept.
   - Example:
     ```javascript
     const arr1 = [1, 2, 3];
     const arr2 = arr1;
     arr2.push(4);
     console.log(arr1); // Output: [1, 2, 3, 4] (arr1 and arr2 point to the same array)
     ```

---

#### **Arrays and Reference Behavior**

1. **Sharing References:**

   - When you assign an array to another variable, both share the same reference:
     ```javascript
     const a = [1, 2, 3];
     const b = a;
     b.push(4);
     console.log(a); // Output: [1, 2, 3, 4]
     ```

2. **Cloning Arrays:**

   - To avoid mutating the original array, clone it:
     ```javascript
     const original = [1, 2, 3];
     const clone = [...original]; // Spread operator
     clone.push(4);
     console.log(original); // Output: [1, 2, 3]
     console.log(clone); // Output: [1, 2, 3, 4]
     ```

3. **Deep vs Shallow Copies:**

   - A **shallow copy** clones only the first level:

     ```javascript
     const nestedArray = [
       [1, 2],
       [3, 4],
     ];
     const shallowCopy = [...nestedArray];
     shallowCopy[0].push(5);
     console.log(nestedArray); // Output: [[1, 2, 5], [3, 4]]
     ```

   - For **deep copies**, use a library like `lodash` or `structuredClone` in modern JavaScript:
     ```javascript
     const deepCopy = structuredClone(nestedArray);
     deepCopy[0].push(6);
     console.log(nestedArray); // Output: [[1, 2], [3, 4]]
     console.log(deepCopy); // Output: [[1, 2, 6], [3, 4]]
     ```

---

#### **Objects and Reference Behavior**

1. **Sharing References:**

   - Objects behave similarly to arrays with reference types:
     ```javascript
     const obj1 = { name: "Alice" };
     const obj2 = obj1;
     obj2.name = "Bob";
     console.log(obj1.name); // Output: Bob
     ```

2. **Cloning Objects:**

   - Use the spread operator or `Object.assign` for shallow copies:
     ```javascript
     const original = { name: "Alice", age: 30 };
     const clone = { ...original };
     clone.name = "Bob";
     console.log(original.name); // Output: Alice
     console.log(clone.name); // Output: Bob
     ```

3. **Deep Cloning:**
   - For nested objects, use `structuredClone`:
     ```javascript
     const nestedObj = { user: { name: "Alice" } };
     const deepCopy = structuredClone(nestedObj);
     deepCopy.user.name = "Bob";
     console.log(nestedObj.user.name); // Output: Alice
     ```

---

#### **Comparing Objects and Arrays**

1. **Reference Equality:**

   - Two objects or arrays are equal only if they reference the same memory:
     ```javascript
     const a = [1, 2, 3];
     const b = [1, 2, 3];
     console.log(a === b); // Output: false (different references)
     ```

2. **Value Equality:**
   - To compare values, use methods like `JSON.stringify` or libraries like Lodash:
     ```javascript
     console.log(JSON.stringify(a) === JSON.stringify(b)); // Output: true
     ```

---

#### **Practical Example: Combining Arrays and Objects**

1. **Creating an Array of Objects:**

   ```javascript
   const users = [
     { id: 1, name: "Alice" },
     { id: 2, name: "Bob" },
   ];
   ```

2. **Modifying a Specific Object:**

   ```javascript
   const updatedUsers = users.map((user) =>
     user.id === 1 ? { ...user, name: "Charlie" } : user
   );
   console.log(updatedUsers);
   ```

3. **Avoid Mutations:**
   - Always create new objects or arrays to avoid side effects in functional programming.

---

#### **Best Practices with Reference Types**

1. Avoid direct mutations when possible:

   ```javascript
   const arr = [1, 2, 3];
   const newArr = [...arr, 4];
   ```

2. Use shallow or deep copies depending on the depth of the structure.

3. For comparing, remember:
   - Primitive types compare values.
   - Reference types compare memory locations.

---

#### **Mini-Exercise**

1. Create an array of objects representing books (`title`, `author`, `year`).
2. Clone the array and update the title of one book in the cloned version.
3. Verify that the original array is unchanged.
4. Deep clone a nested object and modify a property in the clone without affecting the original.

---

#### **Vocabulary for Technical English**

- **Reference:** A pointer to a memory location where data is stored.
- **Shallow Copy:** A copy of the top-level structure without cloning nested objects.
- **Deep Copy:** A full copy of all levels of an object or array.

---

Next, we’ll move into **19. Functions & the `arguments` Object**! Let me know when you're ready!
