# Section 3: Understanding the Basics

## **35. Parsing Request Bodies**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561900#overview)
- [code](code/02-parsing-request-bodies/02-parsing-request-bodies/app.js)
- [steam & buffer schema](pdf/stream&buffer.png)

---

### **What Is a Request Body?**

The **request body** contains data sent by the client to the server in HTTP requests, typically for methods like `POST`, `PUT`, or `PATCH`. It’s used to send information such as:

1. Form data (e.g., user input from a web form).
2. JSON payloads (e.g., API requests).
3. Binary data (e.g., file uploads).

---

### **How Request Bodies Work in Node.js**

The request body isn’t automatically parsed in Node.js. Instead, you need to read and process the data manually or use middleware for convenience.

---

### **Reading and Parsing Request Bodies**

#### **1. Text-Based Body Parsing**

For plain text or small data payloads, read the request body as a stream.

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect chunks of data
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Handle the end of the stream
    req.on("end", () => {
      console.log("Body:", body);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Body received");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
```

---

#### **2. JSON Body Parsing**

For JSON payloads, parse the incoming body string into a JavaScript object.

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] === "application/json"
  ) {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const jsonData = JSON.parse(body);
      console.log("JSON Data:", jsonData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Data received", data: jsonData }));
    });
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid Request");
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
```

---

#### **3. Parsing URL-Encoded Form Data**

To handle `application/x-www-form-urlencoded` (form data), use Node’s built-in `querystring` module.

```javascript
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] === "application/x-www-form-urlencoded"
  ) {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsedData = querystring.parse(body);
      console.log("Form Data:", parsedData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "Form data received", data: parsedData })
      );
    });
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid Request");
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
```

---

### **Using Middleware for Simplified Parsing**

Manually parsing request bodies can be tedious. Frameworks like **Express.js** provide middleware to handle parsing.

1. **Using Express.js for JSON Parsing:**

   ```javascript
   const express = require("express");
   const app = express();

   app.use(express.json()); // Automatically parses JSON bodies

   app.post("/", (req, res) => {
     console.log("JSON Body:", req.body);
     res.json({ message: "JSON received", data: req.body });
   });

   app.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Using Express.js for URL-Encoded Form Data:**

   ```javascript
   app.use(express.urlencoded({ extended: true })); // Automatically parses form data

   app.post("/", (req, res) => {
     console.log("Form Data:", req.body);
     res.json({ message: "Form data received", data: req.body });
   });
   ```

---

### **Best Practices**

1. **Validate Input:**

   - Always validate and sanitize incoming data to prevent injection attacks.

2. **Handle Large Payloads Carefully:**

   - Use libraries or modules that limit request body size to avoid memory issues.

3. **Respond with Appropriate Status Codes:**

   - For invalid payloads, return `400 Bad Request`.

4. **Use Middleware for Larger Projects:**
   - Simplify body parsing by leveraging libraries like `Express.js` or `body-parser`.

---

### **Mini-Exercise**

1. Write a Node.js server that:

   - Accepts plain text data from `POST` requests.
   - Logs the body to the console and responds with "Text Received."

2. Extend the server to:

   - Parse and log JSON payloads.
   - Respond with a JSON object confirming receipt of the data.

3. Bonus: Add support for form data using the `querystring` module.

---

### **Vocabulary for Technical English**

- **Request Body:** The data sent by the client to the server as part of an HTTP request.
- **Payload:** The actual data contained in the request body.
- **Content-Type:** A header specifying the format of the request body (e.g., `application/json`).
- **Middleware:** A function that processes requests before reaching the final route handler.
