# **Vocabulary for Technical English**

- **REPL:** Interactive shell for executing JavaScript code.
- **Persistent:** Data or code that is saved and doesn’t disappear when the program ends.
- **Debug:** Identify and fix errors in code.

- **Reference:** A pointer to a memory location where data is stored.
- **Shallow Copy:** A copy of the top-level structure without cloning nested objects.
- **Deep Copy:** A full copy of all levels of an object or array.

- **Destructuring:** Extracting values from arrays or objects.
- **Expand:** Breaking down an iterable into its individual components.
- **Collect:** Gathering remaining elements into a single structure.

- **Destructuring:** A way to unpack values from arrays or objects.
- **Default Value:** A fallback value used if the property or element is undefined.
- **Nested:** A structure inside another structure (e.g., arrays or objects within objects).

- **Asynchronous:** Operations that do not block the execution of other tasks.
- **Promise:** An object representing the completion or failure of an async operation.
- **Await:** A keyword that pauses execution until a promise resolves.

- **Interpolation:** Inserting variables or expressions into a string.
- **Multiline String:** A string that spans multiple lines.
- **Tagged Template:** A function that processes a template literal.

---

## Understanding the basics

### **26. How the Web Works**

- [notes](../03.Section3.Understanding-The-basics/26.How-The-Web-Works/notes.md)

- **Client:** A device or program that requests resources from a server.
- **Server:** A device or program that processes and responds to client requests.
- **Request:** A message sent by the client to the server.
- **Response:** A message sent by the server to the client.
- **Protocol:** A set of rules for communication (e.g., HTTP, HTTPS).

### **27. Creating a Node Server**

- [notes](../03.Section3.Understanding-The-basics/27.Creating-a-Node-Server/notes.md)

- **Server:** A program that listens for and responds to client requests.
- **Port:** A communication endpoint for network connections.
- **Request:** A message sent by a client to the server.
- **Response:** The server's reply to the client.
- **Static Files:** Predefined files like HTML, CSS, and images.

### **28. The Node Lifecycle & Event Loop**

- [notes](../03.Section3.Understanding-The-basics/28.The-Node-Lifecycle&-Event-Loop/)

- **Call Stack:** The mechanism that tracks function execution.
- **Task Queue:** Holds callbacks for asynchronous tasks waiting to be executed.
- **Microtask Queue:** Holds high-priority callbacks like promises.
- **Blocking:** Prevents further code execution until a task finishes.
- **Non-Blocking:** Allows other tasks to execute while waiting for an operation to complete.

### **29. Controlling the Node.js Process**

- [notes](../03.Section3.Understanding-The-basics/29.Controlling-the-Node.js-Process/notes.md)

- **Process:** An instance of a program running on a computer.
- **Environment Variable:** A dynamic value that configures the runtime environment.
- **Uptime:** The amount of time a process has been running.
- **SIGINT:** A signal sent to terminate a process (e.g., pressing Ctrl+C).

### **30. Understanding Requests**

- [notes](../03.Section3.Understanding-The-basics/30.Understanding-Requests/notes.md)

- **Request:** A message sent by the client to the server asking for a resource or service.
- **Headers:** Metadata sent with a request or response.
- **Body:** Data sent with the request, often in JSON or form-data format.
- **Query Parameters:** Key-value pairs appended to a URL for additional context.

## **31. Sending Responses**

- [notes](../03.Section3.Understanding-The-basics/31.Sending-Responses/notes.md)

- **Response:** The server's reply to a client's request.
- **Status Code:** A number indicating the result of the request.
- **Content-Type:** A header specifying the format of the response body (e.g., `text/html`, `application/json`).
- **Header:** Metadata sent with the response, like `Content-Length` or `Authorization`.
