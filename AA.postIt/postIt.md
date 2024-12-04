# **Vocabulary for Technical English**

## Refresher Javascript

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

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/26.How-The-Web-Works/notes.md)

- **Client:** A device or program that requests resources from a server.
- **Server:** A device or program that processes and responds to client requests.
- **Request:** A message sent by the client to the server.
- **Response:** A message sent by the server to the client.
- **Protocol:** A set of rules for communication (e.g., HTTP, HTTPS).

### **27. Creating a Node Server**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/27.Creating-a-Node-Server/notes.md)

- **Server:** A program that listens for and responds to client requests.
- **Port:** A communication endpoint for network connections.
- **Request:** A message sent by a client to the server.
- **Response:** The server's reply to the client.
- **Static Files:** Predefined files like HTML, CSS, and images.

### **28. The Node Lifecycle & Event Loop**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/28.The-Node-Lifecycle&-Event-Loop/)

- **Call Stack:** The mechanism that tracks function execution.
- **Task Queue:** Holds callbacks for asynchronous tasks waiting to be executed.
- **Microtask Queue:** Holds high-priority callbacks like promises.
- **Blocking:** Prevents further code execution until a task finishes.
- **Non-Blocking:** Allows other tasks to execute while waiting for an operation to complete.

### **29. Controlling the Node.js Process**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/29.Controlling-the-Node.js-Process/notes.md)

- **Process:** An instance of a program running on a computer.
- **Environment Variable:** A dynamic value that configures the runtime environment.
- **Uptime:** The amount of time a process has been running.
- **SIGINT:** A signal sent to terminate a process (e.g., pressing Ctrl+C).

### **30. Understanding Requests**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/30.Understanding-Requests/notes.md)

- **Request:** A message sent by the client to the server asking for a resource or service.
- **Headers:** Metadata sent with a request or response.
- **Body:** Data sent with the request, often in JSON or form-data format.
- **Query Parameters:** Key-value pairs appended to a URL for additional context.

## **31. Sending Responses**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/31.Sending-Responses/notes.md)

- **Response:** The server's reply to a client's request.
- **Status Code:** A number indicating the result of the request.
- **Content-Type:** A header specifying the format of the response body (e.g., `text/html`, `application/json`).
- **Header:** Metadata sent with the response, like `Content-Length` or `Authorization`.

## **32. Request & Response Headers**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/32.Request&Response-Headers/notes.md)

- **Metadata:** Data that provides information about other data.
- **Cache-Control:** A header that specifies caching policies.
- **Authorization:** A header used to authenticate a request.
- **Header:** A key-value pair in an HTTP message for metadata.

## **33. Routing Requests**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/33.Routing-Requests/notes.md)

- **Route:** A URL pattern and HTTP method combination that triggers a specific action.
- **Dynamic Route:** A route that contains variable segments (e.g., `/user/:id`).
- **Wildcard Route:** A fallback route for undefined paths.
- **Query Parameters:** Key-value pairs passed in the URL (e.g., `?id=123`).

## 34. Redirecting Requests

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/34.Redirecting-Requests/notes.md)

- **Redirect:** Sending a client to a different URL.
- **Permanent Redirect:** A redirect indicating a resource’s URL has permanently changed (`301`).
- **Temporary Redirect:** A redirect indicating the resource is temporarily located elsewhere (`302`, `307`).
- **Location Header:** The HTTP header that specifies the target URL for the redirect.

## **35. Parsing Request Bodies**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/35.Parsing-Request-Bodies/notes.md)

- **Request Body:** The data sent by the client to the server as part of an HTTP request.
- **Payload:** The actual data contained in the request body.
- **Content-Type:** A header specifying the format of the request body (e.g., `application/json`).
- **Middleware:** A function that processes requests before reaching the final route handler.

## **36. Understanding Event-Driven Code Execution**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/36.Understanding-Event-Driven-Code-Execution/notes.md)

- **Event Loop:** A mechanism that continuously checks for and processes events.
- **Event Listener:** A function that runs when a specific event occurs.
- **Emit:** Trigger an event and invoke its listeners.
- **Callback:** A function executed in response to an event or asynchronous operation.

## **37. Blocking and Non-Blocking Code**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/37.Blocking-and-Non-Blocking-Code/notes.md)

- **Blocking Code:** Code execution stops until the current task is completed.
- **Non-Blocking Code:** Code execution continues without waiting for the current task to finish.
- **Callback Hell:** A nested structure of callbacks that makes code hard to read.
- **Scalability:** The ability to handle increasing amounts of work or requests efficiently.

## **38. Node.js - Looking Behind the Scenes**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/38.Node.js-Looking-Behind-the-Scenes/notes.md)

- **Runtime Environment:** Software that provides the resources for code execution.
- **Event Loop:** The mechanism that handles asynchronous events and callbacks.
- **libuv:** A library for non-blocking I/O operations in Node.js.
- **Thread Pool:** A group of worker threads that handle tasks in parallel.

## **39. Using the Node.js Module System**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/39.Using-the-Node-Modules-System/notes.md)

- **Module:** A reusable block of code encapsulated in a file.
- **Core Module:** Built-in Node.js modules like `fs` or `http`.
- **Local Module:** Modules created by the developer for specific application logic.
- **Third-Party Module:** External packages installed via npm.
- **Cache:** A stored copy of a required module to prevent redundant loading.

## **40. Wrap-Up**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/40.Wrap-Up/notes.md)
