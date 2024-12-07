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

## **Time to practice**

`Add a short resume about the purposes and concept`

- [TP](../03.Section3.Understanding-The-basics/Exercice1.Time-to-Practice-The%20Basics/notes.md)

## **40. Wrap-Up**

`Add a short resume about the purposes and concept`

- [notes](../03.Section3.Understanding-The-basics/40.Wrap-Up/notes.md)

---

## Section 4: Improved Development Workflow and Debug

### **43. Understanding NPM Scripts**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/43.Understanding-NPM-Scripts/notes.md)

1. **NPM Script:** A command defined in `package.json` to automate tasks.
2. **Hook:** A script that runs before (`pre`) or after (`post`) another script.
3. **Automation:** Using scripts to handle repetitive tasks like starting a server or running tests.

### **44. Installing 3rd Party Packages**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/44.Installing-3rd-Party-Packages/notes.md)

1. **Dependency:** A package or module required by your project.
2. **npm:** The default package manager for Node.js.
3. **DevDependency:** A dependency needed only during development.
4. **Global Package:** A package installed system-wide, not limited to one project.

### **Useful Commands Reference**

| **Command**                        | **Description**                                    |
| ---------------------------------- | -------------------------------------------------- |
| `npm install <package>`            | Install a package and add to `dependencies`.       |
| `npm install <package> --save-dev` | Install a package and add to `devDependencies`.    |
| `npm install -g <package>`         | Install a package globally.                        |
| `npm uninstall <package>`          | Remove a package.                                  |
| `npm list`                         | List installed packages.                           |
| `npm outdated`                     | List outdated packages.                            |
| `npm update <package>`             | Update a package to the latest compatible version. |

### **45. Global Features vs Core Modules vs Third-Party Modules**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/45.Global-FeaturesVsCore-ModulesVsThird-Party-Modules/notes.md)

- **Global Feature:** A built-in part of the JavaScript or Node.js runtime.
- **Core Module:** A module provided by Node.js that doesn’t require installation.
- **Third-Party Module:** An external library installed via npm.
- **Import:** Including a module in your file using `require` or `import`.

#### **Comparison Table**

| **Feature Type**        | **Installation**    | **Import Required** | **Examples**                      |
| ----------------------- | ------------------- | ------------------- | --------------------------------- |
| **Global Features**     | No                  | No                  | `console`, `process`, `__dirname` |
| **Core Modules**        | No                  | Yes                 | `fs`, `path`, `http`, `events`    |
| **Third-Party Modules** | Yes (`npm install`) | Yes                 | `express`, `lodash`, `dotenv`     |

### **46. Using Nodemon for Autorestarts**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/46.Using-Nodemon-for-Autorestarts/notes.md)

- **Autorestart:** Automatically restarting a process when changes are detected.
- **Development Dependency:** A package required only during development.
- **Monitor:** Watch for changes in files or directories.
- **Configuration:** Settings that control the behavior of a tool or application.

### **47. Global & Local npm Packages**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/47.Global&Local-npm-Packages/notes.md)

- **Local Package:** A dependency installed specifically for a project.
- **Global Package:** A dependency installed system-wide, accessible from any project.
- **Dependencies:** Packages required by a project, listed in `package.json`.
- **CLI Tool:** Command-line interface utility (e.g., `nodemon`, `eslint`).

### **Comparison Table**

| **Feature**              | **Local Packages**                          | **Global Packages**                          |
| ------------------------ | ------------------------------------------- | -------------------------------------------- |
| **Scope**                | Project-specific                            | System-wide                                  |
| **Installation Command** | `npm install <package-name>`                | `npm install -g <package-name>`              |
| **Stored In**            | `node_modules` directory inside the project | Global npm directory (`npm root -g`)         |
| **Use Case**             | Libraries, frameworks, project dependencies | CLI tools, utilities, globally used packages |
| **Execution**            | `npx <package>` or npm script               | Directly in the terminal                     |

### **48. Understanding Different Error Types**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/48.Understanding-different-Error-Types/notes.md)

- **Syntax Error:** An error caused by invalid code syntax.
- **Type Error:** An error caused by using a value of the wrong type.
- **Reference Error:** An error caused by accessing an undefined variable.
- **Range Error:** An error caused by a value being out of range.
- **System Error:** An error caused by the underlying system (e.g., file not found).
- **Operational Error:** An expected error during normal operation.
- **Programmer Error:** A bug in the code due to incorrect logic or syntax.

### **49. Finding & Fixing Syntax Errors**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/49.Finding&Fixing-Syntax-Errors/notes.md)

- **Syntax Error:** An error caused by incorrect code structure or syntax.
- **Linter:** A tool that analyzes code for potential errors and style issues.
- **Compiler:** Translates code into executable instructions and identifies syntax errors.
- **Syntax Highlighting:** Color-coding in code editors to distinguish elements and errors.

### **50. Dealing with Runtime Errors**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/50.Dealing-with-Runtime-Errors/notes.md)

- **Runtime Error:** An error that occurs during the execution of a program.
- **Try-Catch Block:** A mechanism to handle errors in synchronous code.
- **Graceful Degradation:** Maintaining partial functionality when an error occurs.
- **Uncaught Exception:** An error that is not handled by any `try...catch` block.
- **Fallback:** An alternative solution when the primary action fails.

### **51. Logical Errors**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/51.Logical-Errors/notes.md)

- **Logical Error:** A mistake in the program's logic that produces incorrect results.
- **Debugging:** The process of identifying and fixing errors in code.
- **Breakpoint:** A point in the code where execution is paused for debugging.
- **Edge Case:** An unusual or extreme input that tests the boundaries of the logic.
- **Refactor:** Improving code structure without changing its behavior.

### **52. Using the Debugger**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/52.Using-the-Debugger/notes.md)

- **Debugger:** A tool that helps you identify and fix bugs by pausing execution and inspecting variables.
- **Breakpoint:** A marker that pauses code execution at a specific line.
- **Step Over:** Execute the current line and move to the next line.
- **Step Into:** Step into the function being called.
- **REPL:** Read-Eval-Print-Loop; a prompt to evaluate code during debugging.

### **53. Restarting the Debugger Automatically After Editing Our App**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/53.Restarting-the-Debugger-Automatically-After-Editing-our-Ap/notes.md)

- **Debugger:** A tool for pausing code execution and inspecting variables.
- **Breakpoint:** A marker that stops execution at a specific line.
- **Nodemon:** A utility that automatically restarts the Node.js application when files change.
- **Hot Reloading:** Automatically reloading the application when changes are detected.

## **54. Debugging Node.js in Visual Studio Code**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/54.Debugging-Node.js-in-Visual-Studio-Code/notes.md)

- **Debugger:** A tool that helps you pause execution and inspect code.
- **Breakpoint:** A marker that pauses execution at a specific line.
- **Call Stack:** The sequence of function calls leading to the current execution point.
- **Step Over:** Execute the current line and move to the next.
- **Step Into:** Enter a function being called to debug inside it.
- **Debug Console:** An interactive console to evaluate expressions during debugging.

### **55. Changing Variables in the Debug Console**

`Add a short resume about the purposes and concept`

- [notes](../04.Section4.Improved-Development-Workflow-and-Debug/55.Changing-Variables-in-the-Debug-Console/notes.md)

- **Debug Console:** An interactive console in VSCode for evaluating expressions and modifying variables during debugging.
- **Breakpoint:** A marker that pauses code execution at a specific line.
- **Scope:** The context in which variables are accessible.
- **Evaluate:** To compute the result of an expression.

---

## Section 5: Working with Express.js

### **58. Module Introduction**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/58.Module-Introduction/notes.md)

### **59. What is Express.js?**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/59.What-is-Express.js/notes.md)

### **60. Installing Express.js**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/60.Installing-Express.js/notes.md)

### **61. Adding Middleware**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/61.Adding-Middleware/notes.md)

### **62. How Middleware Works**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/62.How-Middleware-Works/notes.md)

### **63. Express.js - Looking Behind the Scenes**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/63.Express.js-Looking-Behind-the-Scenes/notes.md)

### Exercise 2 - Time to practice

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/Exercice2-Time-to-Practice-Express.js/notes.md)
