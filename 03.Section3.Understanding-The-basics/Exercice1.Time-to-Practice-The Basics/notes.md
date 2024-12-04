# Section 3: Understanding the Basics

## **Exercise 1: Time to Practice - The Basics**

- [Udemy]()

---

### **Objective:**

Create a simple Node.js project that applies the foundational concepts you’ve learned, including:

- Core modules.
- Local modules.
- HTTP server setup.
- Routing.
- Handling asynchronous tasks.

---

### **Requirements:**

1. **Arithmetic Module:**

   - Create a module (`arithmetic.js`) that exports functions for addition, subtraction, multiplication, and division.

2. **HTTP Server:**

   - Create an HTTP server that:
     - Responds to `/add`, `/subtract`, `/multiply`, and `/divide` routes.
     - Accepts query parameters (e.g., `/add?num1=5&num2=10`).
     - Returns the result of the operation.

3. **Error Handling:**

   - Handle missing or invalid query parameters gracefully by returning an appropriate error message.

4. **Asynchronous File Logging:**
   - Log each request and its result to a file (`requests.log`) asynchronously.

---

### **Step-by-Step Guide**

#### **1. Create the Arithmetic Module**

- File: `arithmetic.js`

  ```javascript
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

  module.exports = { add, subtract, multiply, divide };
  ```

---

#### **2. Set Up the HTTP Server**

- File: `server.js`

  ```javascript
  const http = require("http");
  const url = require("url");
  const fs = require("fs");
  const { add, subtract, multiply, divide } = require("./arithmetic");

  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);

    let result;

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (pathname) {
        case "/add":
          result = add(num1, num2);
          break;
        case "/subtract":
          result = subtract(num1, num2);
          break;
        case "/multiply":
          result = multiply(num1, num2);
          break;
        case "/divide":
          result = divide(num1, num2);
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 - Route Not Found");
          return;
      }

      // Log the request asynchronously
      const logEntry = `${new Date().toISOString()} - ${pathname} - num1=${num1}, num2=${num2}, result=${result}\n`;
      fs.appendFile("requests.log", logEntry, (err) => {
        if (err) console.error("Failed to log request:", err);
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ operation: pathname.slice(1), num1, num2, result })
      );
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid or missing query parameters" }));
    }
  });

  server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });
  ```

---

### **How to Test:**

1. **Start the Server:**

   ```bash
   node server.js
   ```

2. **Make HTTP Requests:**

   - Addition:  
     `http://localhost:3000/add?num1=5&num2=10`
   - Subtraction:  
     `http://localhost:3000/subtraction?num1=20&num2=10`
   - Multiplication:  
     `http://localhost:3000/multiply?num1=3&num2=4`
   - Division:  
     `http://localhost:3000/divide?num1=15&num2=3`

3. **Invalid Requests:**
   - Missing Parameters:  
     `http://localhost:3000/add`
   - Invalid Route:  
     `http://localhost:3000/modulus`

---

### **Expected Output:**

- **Valid Request:**

  ```json
  {
    "operation": "add",
    "num1": 5,
    "num2": 10,
    "result": 15
  }
  ```

- **Error for Missing Parameters:**

  ```json
  {
    "error": "Invalid or missing query parameters"
  }
  ```

- **Error for Invalid Route:**

  ```
  404 - Route Not Found
  ```

- **Request Log (`requests.log`):**
  ```
  2024-12-02T12:34:56.789Z - /add - num1=5, num2=10, result=15
  ```

---

### **Next Steps:**

1. Add support for additional operations or custom error messages.
2. Extend the logging system to include IP addresses or headers.
3. Explore using a third-party logging library like `winston` for advanced logging.

---

### **Vocabulary for Technical English**

- **Query Parameters:** Key-value pairs appended to a URL for passing data to the server.
- **Routing:** Directing requests to specific code logic based on the URL path.
- **Log File:** A file that records events, requests, or errors for future reference.
- **Append:** Add new content to the end of an existing file or data structure.

---

Let me know if you need further clarification or want to expand this exercise! 🚀
