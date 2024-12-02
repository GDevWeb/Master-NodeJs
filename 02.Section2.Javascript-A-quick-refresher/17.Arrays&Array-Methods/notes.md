# Section 2: JavaScript - A Quick Refresher

## **17. Arrays & Array Methods**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561868#overview)
- [MDN - Array properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)
- [code](code/05-arrays/05-arrays/play.js)

---

### **What Are Arrays?**

An array is a data structure that stores a list of items (elements). Arrays are zero-indexed, meaning the first element is accessed using index `0`.

1. **Creating an Array:**

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   ```

2. **Accessing Elements:**

   ```javascript
   console.log(fruits[0]); // Output: apple
   ```

3. **Modifying Elements:**

   ```javascript
   fruits[1] = "blueberry";
   console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
   ```

4. **Array Properties:**
   - **Length:** Returns the number of elements:
     ```javascript
     console.log(fruits.length); // Output: 3
     ```

---

#### **Common Array Methods**

1. **Adding and Removing Elements:**

   - **`push` (Add to End):**

     ```javascript
     fruits.push("grape");
     console.log(fruits); // Output: ["apple", "blueberry", "cherry", "grape"]
     ```

   - **`pop` (Remove from End):**

     ```javascript
     fruits.pop();
     console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
     ```

   - **`unshift` (Add to Beginning):**

     ```javascript
     fruits.unshift("strawberry");
     console.log(fruits); // Output: ["strawberry", "apple", "blueberry", "cherry"]
     ```

   - **`shift` (Remove from Beginning):**
     ```javascript
     fruits.shift();
     console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
     ```

---

2. **Searching for Elements:**

   - **`indexOf`:**
     Finds the index of an element:

     ```javascript
     console.log(fruits.indexOf("blueberry")); // Output: 1
     ```

   - **`includes`:**
     Checks if an element exists:
     ```javascript
     console.log(fruits.includes("banana")); // Output: false
     ```

---

3. **Manipulating Elements:**

   - **`splice` (Add/Remove/Replace):**

     ```javascript
     fruits.splice(1, 1, "blackberry"); // Replace "blueberry" with "blackberry"
     console.log(fruits); // Output: ["apple", "blackberry", "cherry"]
     ```

   - **`slice` (Create a Subarray):**
     ```javascript
     const newFruits = fruits.slice(0, 2);
     console.log(newFruits); // Output: ["apple", "blackberry"]
     ```

---

4. **Iterating Over Arrays:**

   - **`forEach`:**
     Executes a function for each element:

     ```javascript
     fruits.forEach((fruit) => console.log(fruit));

     // Output:
     // apple
     // blackberry
     // cherry
     ```

   - **`map`:**
     Creates a new array by transforming each element:
     ```javascript
     const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
     console.log(upperFruits); // Output: ["APPLE", "BLACKBERRY", "CHERRY"]
     ```

---

5. **Filtering and Searching:**

   - **`filter`:**
     Returns a new array with elements that match a condition:

     ```javascript
     const longFruits = fruits.filter((fruit) => fruit.length > 5);
     console.log(longFruits); // Output: ["blackberry"]
     ```

   - **`find`:**
     Finds the first element that matches a condition:
     ```javascript
     const cherry = fruits.find((fruit) => fruit === "cherry");
     console.log(cherry); // Output: cherry
     ```

---

6. **Reducing Arrays:**

   - **`reduce`:**
     Reduces the array to a single value:
     ```javascript
     const numbers = [1, 2, 3, 4];
     const sum = numbers.reduce((total, num) => total + num, 0);
     console.log(sum); // Output: 10
     ```

---

7. **Sorting Arrays:**

   - **`sort`:**
     Sorts the array in place:

     ```javascript
     const sortedFruits = [...fruits].sort();
     console.log(sortedFruits); // Output: ["apple", "blackberry", "cherry"]
     ```

   - **`reverse`:**
     Reverses the array:
     ```javascript
     const reversedFruits = [...fruits].reverse();
     console.log(reversedFruits); // Output: ["cherry", "blackberry", "apple"]
     ```

---

#### **Combining Array Methods**

You can chain multiple methods to perform complex operations:

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * 2) // Double the numbers
  .reduce((total, num) => total + num, 0); // Sum them up

console.log(result); // Output: 12
```

---

#### **Mini-Exercise**

1. Create an array of numbers and find the sum of all even numbers using `filter` and `reduce`.
2. Use `map` to create a new array with each number squared, then sort it in descending order.
3. Create an array of names and filter out names shorter than 5 characters.

---

#### **Vocabulary for Technical English**

- **Iteration:** Repeating an action for each element in a collection.
- **Filter:** Extract elements that meet a condition.
- **Reduce:** Combine all elements into a single value.
- **Transform:** Change elements into a new form (e.g., `map`).

---

Next, we’ll cover **18. Functions & the `arguments` Object**. Let me know when you’re ready!
