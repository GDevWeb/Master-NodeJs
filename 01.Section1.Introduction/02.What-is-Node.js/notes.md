# Section 1: Node.js - Introduction

[Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561820#overview)

## **02. What is Node.js?**

---

### **Definition of Node.js**

Node.js is an **open-source, cross-platform JavaScript runtime environment** designed for building fast, scalable server-side and network applications. Unlike JavaScript in browsers, which interacts with the Document Object Model (DOM) for user interfaces, Node.js focuses on executing JavaScript code outside the browser.

---

#### **Key Characteristics of Node.js**

1. **Built on the V8 JavaScript Engine**

   - V8 is the same engine that powers Google Chrome.
   - Converts JavaScript code into efficient, machine-readable instructions.

2. **Single-Threaded, Event-Driven Architecture**

   - Processes are handled using a single thread but are non-blocking due to event-driven programming.
   - This makes Node.js perfect for handling concurrent connections, like in real-time applications.

3. **Non-blocking I/O (Input/Output)**

   - Node.js uses asynchronous programming to handle multiple tasks without waiting for one to finish.
   - Example: A server can process multiple file reads and writes simultaneously.

4. **Cross-Platform**

   - Runs on Windows, macOS, Linux, and more, providing flexibility for developers.

5. **Scalable Applications**
   - Suitable for applications that need to handle a large number of simultaneous connections.

---

#### **Where is Node.js Used?**

1. **Web Servers and APIs**

   - Create RESTful APIs for modern web applications.
   - Example: A server handling requests to fetch user data.

2. **Real-time Applications**

   - Chat applications, live notifications, or online gaming platforms.
   - Example: A multiplayer online game server.

3. **Tools and Utilities**

   - CLI tools or scripts.
   - Example: Development tools like Webpack or ESLint.

4. **Microservices**
   - Node.js is often used in a microservice architecture for building modular and scalable systems.

---

#### **Why Node.js is Different?**

1. **JavaScript on the Server**

   - Before Node.js, JavaScript was limited to client-side interactions. Node.js extended its use to servers, bridging the gap.

2. **Unified Programming Language**

   - Use JavaScript for both frontend and backend development.

3. **NPM (Node Package Manager)**
   - A repository with thousands of pre-built packages, making development faster and easier.

---

#### **Example Use Case**

Imagine you're building a chat application:

1. A user sends a message.
2. Node.js handles the request and sends the message to all connected clients in real time.
3. The asynchronous nature ensures no delay, even with many users online.

---

#### **Mini-Exercise:**

1. Research and list two applications built with Node.js.
2. Write a short paragraph explaining how Node.js improves real-time functionality.

---

#### **Vocabulary for Technical English:**

- **Asynchronous:** Code that doesn’t block execution while waiting for a task to complete.
- **Thread:** A unit of a process that can run independently.
- **Non-blocking I/O:** Input/output operations that allow other code to run while waiting for data.
