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

### **Difference Between `app.get()` and `app.use()` in Express.js**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/00.The-differece-between-app.use&app.get/notes.md)

- Use `app.get()` for handling **specific GET requests**.
- Use `app.use()` for **middleware** and when you need to handle **all HTTP methods** or organize routes with a router.

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

### **64. Handling Different Routes**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/64.Handling-Different-Routes/notes.md)

### Exercise 2 - Time to practice

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/Exercice2-Time-to-Practice-Express.js/notes.md)

### **65. Parsing Incoming Requests**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/65.Parsing-Incoming-Requests/notes.md)

### **Summary of Parsing Methods**

| **Type of Data**           | **Middleware**                 | **Example Usage**                              |
| -------------------------- | ------------------------------ | ---------------------------------------------- |
| **JSON Data**              | `express.json()`               | API requests with JSON payloads                |
| **URL-encoded Form Data**  | `express.urlencoded()`         | HTML form submissions                          |
| **Query Parameters**       | Access via `req.query`         | `http://localhost:3000/search?keyword=express` |
| **Route Parameters**       | Access via `req.params`        | `http://localhost:3000/users/42`               |
| **Multipart Data (Files)** | `multer` (third-party library) | File uploads via forms                         |

### **65. Parsing Incoming Requests**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/65.Parsing-Incoming-Requests/notes.md)
-

### **66. Limiting Middleware Execution to POST Requests**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/66.Limiting-Middleware-Execution-to-POST-Requests/notes.md)

### **67. Using Express Router**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/67.Using-Express-Router/notes.md)

### **68. Adding a 404 Error Page**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/68.Adding-a-404-Error-Page/notes.md)

### **69. Filtering Paths**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/69.Filtering-Paths/notes.md)

#### **Summary**

- **Path Filtering** allows you to apply middleware and route handlers selectively.
- **Techniques Include:**
  - **Path Prefixes:** `app.use("/admin", middleware)`
  - **Dynamic Segments:** `app.get("/users/:id", handler)`
  - **Regular Expressions:** `app.get(/^\/products\/[0-9]+$/, handler)`
  - **Conditional Logic:** Custom logic within middleware.

### **70. Creating HTML Pages (Without a Template Engine)**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/70.Creating-HTML-Pages/notes.md)

#### **Best Practices for Serving Static HTML Files**

1. **Organize Files in a `public` Directory:**

   - Keep your HTML, CSS, JavaScript, and image files in the `public` folder for easy access.

2. **Use `express.static()` for Static Files:**

   - Simplifies serving multiple static assets (HTML, CSS, JS, images).

3. **Add Error Handling for Missing Files:**

   - Handle 404 errors for missing pages with a custom error page.

4. **Security Considerations:**
   - Avoid serving sensitive files through `express.static()`.

#### **Summary**

- **Express can serve static HTML files** without a template engine using `express.static()`.
- **Use `res.sendFile()`** to send specific HTML files in response to route requests.
- **Organize assets** in a `public` folder for cleaner and more maintainable code.

### **71. Serving HTML Pages**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/71.Serving-HTML-Pages/notes.md)

### **Comparison of `express.static()` vs. `res.sendFile()`**

| **Feature**       | **`express.static()`**                    | **`res.sendFile()`**                         |
| ----------------- | ----------------------------------------- | -------------------------------------------- |
| **Use Case**      | Serve entire directories of static files  | Serve specific files for defined routes      |
| **Ease of Use**   | Simple, one-liner for multiple files      | Requires explicit routing for each file      |
| **Path Matching** | Matches URLs automatically                | Matches only the routes you define           |
| **Best For**      | Serving assets like HTML, CSS, JS, images | Serving individual files conditionally       |
| **Example**       | `app.use(express.static("public"))`       | `res.sendFile(path.join(__dirname, "file"))` |

### **72. Returning a 404 Page**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/72.Returning-a-404-Page/notes.md)

#### **Best Practices for 404 Error Pages**

1. **Friendly Message**:

   - Provide a clear and helpful message to users.

2. **Navigation Links**:

   - Include links to help users navigate back to key sections (e.g., Home Page).

3. **Consistent Design**:

   - Style the 404 page to match your website’s branding.

4. **Logging**:
   - Log 404 errors to monitor missing routes and fix potential issues.

##### **Summary**

- **Purpose**: Handle unmatched routes with a custom 404 page.
- **Implementation**:
  - Create a `404.html` file.
  - Use a catch-all middleware with `app.use()` to serve the 404 page.
- **Best Practices**: Keep the design consistent and provide helpful navigation.

### **74. Using a Helper Function for Navigation**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/74.Using%20a-Helper-Function-for-Navigation/notes.md)

#### Summary

- Helper Function: Simplifies navigation by dynamically resolving the root directory.
- Avoid Hardcoding: Enhances maintainability and readability.
- Flexible: Easily extendable for more complex path resolutions.

### **75. Styling Our Pages**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/75.Styling-our-Pages/notes.md)

### **76. Serving Files Statically**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/76.Serving-Files-Statically/notes.md)

### Exercise 3 : Time to practice navigation

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/Exercice3-Time-to-Practice-Navigation/notes.md)

### **77.Wrap up**

`Add a short resume about the purposes and concept`

- [notes](../05.Section5.Working-with-Express.js/77.Wrap-Up/notes.md)

---

## Section 6: Working with Dynamic Content & Adding Templating Engines

### **79. Module Introduction**

`Add a short resume about the purposes and concept`

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/79.%20Module%20Introduction/notes.md)

### **80. Sharing Data Across Requests & Users**

`Add a short resume about the purposes and concept`

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/80.Sharing-Data-Across-Requests&User/notes.md)

### **81. Templating Engines – An Overview**

`Add a short resume about the purposes and concept`

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/81.Templating-Engines-An-Overview/notes.md)

### **82. Installing & Implementing Pug**

`Add a short resume about the purposes and concept`

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/82.Installing&Implementing-Pug/notes.md)

### **83. Outputting Dynamic Content**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/83.Outputting-Dynamic-Content/notes.md)

### **84. Official Pug Docs**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/84.Official-Pug-Docs/notes.md)

#### **85. Converting HTML Files to Pug**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/85.Converting-HTML-Files-to-Pug/notes.md)

#### **86. Adding a Layout in Pug**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/86.Adding-a-Layout/notes.md)

### **87. Finishing the Pug Template**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/87.Finishing-the-Pug-Template/notes.md)

### **88. Avoiding an error**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/88.Avoiding-an-Error/notes.md)

### **89. Working with Handlebars**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/89.Working-with-Handlebars/notes.md)

### **90. Converting Our Project to Handlebars**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/90.Converting-our-Project-to-Handlebars/notes.md)

### **91. Adding the Layout to Handlebars**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/91.Adding-the-Layout-to-Handlebars/notes.md)

### **92. Working with EJS**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/92.Working-with-EJS/notes.md)

### **93. Working on the Layout with Partials in EJS**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/93.Working-on-the-Layout-with-Partials/notes.md)

### **94. Wrap Up**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/94.Wrap-Up/notes.md)

### **Exercise 4: Time to Practice - Templating Engines with Pug**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/Exercice4.Time-to-Practice-Templating-Engines/notes.md)

### 95. [OPTIONAL] Assignment Solution

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/95.OPTIONAL-Assignment-Solution/notes.md)

### **96. Useful Resources & Links**

- [notes](../06.Section6.Working-with-Dynamic-Content&Adding-Templating-Engines/96.Useful-Resources&Links/notes.md)

---

# Section 7: The Model View Controller (MVC)

## **97. Module Introduction**

- [notes](../07.Section7.The-Model-View-Controller/97.Module-introduction/notes.md)

### **98. What is the MVC?**

- [notes](../07.Section7.The-Model-View-Controller/98.What-is-the-MVC/notes.md)

### **99. Adding Controllers (New Project Setup)**

- [notes](../07.Section7.The-Model-View-Controller/99.Adding-Controllers/notes.md)

#### **100. Finishing the Controllers**

- [notes](../07.Section7.The-Model-View-Controller/100.Finishing-the-Controllers/notes.md)

### **101. Adding a Product Model**

- [notes](../07.Section7.The-Model-View-Controller/101.Adding-a-Product-Model/notes.md)

### **102. Storing Data in Files via the Model**

- [notes](../07.Section7.The-Model-View-Controller/102.Storing-Data-in-Files-Via-the-Model/notes.md)

### **103. Fetching Data from Files via the Model**

- [notes](../07.Section7.The-Model-View-Controller/103.Fetching-Data-from-Files-Via-the-Model/notes.md)

### **104. Refactoring the File Storage Code**

- [notes](../07.Section7.The-Model-View-Controller/104.Refactoring-the-File-Storage-Code/notes.md)

#### **105. Wrap Up**

- [notes](../07.Section7.The-Model-View-Controller/105.Wrap-Up/notes.md)

---

## Section 8: Optional - Enhancing the App

- [Final project](../08.Section8.Optional-Enhancing-the-App/shop-project-enhanced/app.js)
- [Wrap-up](../08.Section8.Optional-Enhancing-the-App/115/notes.md)

---

## **Table of Contents: Section 9 - Dynamic Routes & Advanced Models**

---

### **Overview**

This section focused on building and managing dynamic routes and advanced models, especially for products and a shopping cart system.

---

### **1. Module Introduction**

- **Lesson 116**: Introduction to the key goals of the section.

---

### **2. Dynamic Routes**

- **Lesson 117**: Preparations for dynamic routes.
- **Lesson 118**: Applied changes and setup validation.
- **Lesson 119**: Adding dynamic routes with product IDs.
- **Lesson 120**: Extracting dynamic parameters.
- **Lesson 121**: Loading product detail data.
- **Lesson 122**: Rendering the product detail view.

---

### **3. CRUD Operations**

#### Products

- **Lesson 123**: Passing data with POST requests.
- **Lesson 124**: Adding a cart model to store products.
- **Lesson 125**: Using query parameters for filtering and sorting.
- **Lesson 126**: Pre-populating the edit product page with data.
- **Lesson 127**: Linking to the edit page dynamically.
- **Lesson 128**: Updating product data via form submission.
- **Lesson 129**: Adding and verifying product delete functionality.

#### Cart

- **Lesson 130**: Deleting items from the cart.
- **Lesson 131**: Displaying detailed cart items dynamically.
- **Lesson 132**: Ensuring the cart updates dynamically.

---

### **4. Bug Fixes & Improvements**

- **Lesson 133**: Fixing the delete product bug to synchronize shop and cart.

---

### **5. Wrap Up**

- **Lesson 134**: Reviewing the section and identifying next steps.

---

### **Key Features Developed**

1. **Dynamic Product Routes**: Show product details dynamically based on IDs.
2. **Cart System**:
   - Add items to the cart.
   - Remove items from the cart.
   - Display detailed cart contents with dynamic quantities and totals.
3. **CRUD Operations for Products**:
   - Edit and delete products from the shop.
   - Synchronize product deletion with the cart.
4. **Error Handling**:
   - Graceful handling of missing or invalid data.
5. **Sorting and Filtering**:
   - Query parameters to sort or filter products dynamically.

---

This table of contents provides an overview of what you’ve accomplished in this section and serves as a quick reference for revisiting specific lessons or topics. Let me know if you’d like a formatted `.md` or `.docx` version! 😊
