/*  
Final Exercise
1.Create a Node.js Application:
  1.Build a simple app with routes, error handling, and logging.

2.Use the Following Tools:

  1.Nodemon for automatic restarts.
  2.VSCode Debugger to debug and fix issues.
  3.ESLint for linting.
  3.Prettier for code formatting.

20Introduce Errors and Debug Them:
  1.Create syntax, runtime, and logical errors and practice debugging them.

*/

const http = require("http");
const url = require("url");
console.log("url :", url);

const port = process.env.PORT || 3000;

// utils:
const { addition } = require("./utils/arithmetic");

const server = http.createServer((req, res) => {
  // req
  const pathName = req.url;
  console.log("pathName", pathName);
  const parsedUrl = url.parse(pathName, true);
  console.log("parsedUrl", parsedUrl);
  console.log("?Search:", parsedUrl.search);
  const method = req.method;
  console.info("method", method);

  // params :
  const paramA = parseFloat(parsedUrl.query.paramA);

  const paramB = parseFloat(parsedUrl.query.paramB);
  console.log("query:", parsedUrl.query);
  if (parsedUrl.pathname === "/" && method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(`Welcome on my homePage powered by NodeJS`);
  } else if (parsedUrl.pathname === "/addition" && method === "GET") {
    const result = addition(paramA, paramB);
    try {
      if (
        typeof paramA !== "number" ||
        typeof paramB !== "number" ||
        isNaN(paramA) ||
        isNaN(paramB)
      ) {
        throw new Error(`The params A & B must both numbers`);
      }
      console.log(result);
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end(`The sum of ${paramA} + ${paramB} is : ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      res.writeHead(400, { "Content-type": "text/plain" });
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end(`Error 404 - Page not found !`);
  }
});

server.listen(port, () => {
  console.info(`The server running on http://localhost/${port}`);
});
