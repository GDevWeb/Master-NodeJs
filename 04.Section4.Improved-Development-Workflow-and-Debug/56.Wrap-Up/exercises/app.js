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
const path = require("path");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // req
  const pathName = req.url;
  console.log("pathName", pathName);
  const method = req.method;
  console.info("method", method);
  const headers = req.headers;
  console.info("headers", headers);

  // params :
  const paramA = pathName.paramA;
  console.info("paramA", paramA);
  const paramB = pathName.paramB;
  console.info("paramB", paramB);

  if (pathName === "/" && method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(`Welcome on my homePage powered by NodeJS`);
  } else if (pathName === "/addition" && method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(`Welcome on my additionPage powered by NodeJS`);
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end(`Error 404 - Page not found !`);
  }
});

server.listen(port, () => {
  console.info(`The server running on http://localhost/${port}`);
});
