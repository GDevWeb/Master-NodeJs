/* 
Mini-Exercise

1.Create a Node.js server that:

  Serves a welcome page at /.
  Returns JSON data for /api/users.
  Handles 404 errors gracefully.

2.Enhance the server to accept a query parameter (e.g., /greet?name=John) and respond with a personalized message.
*/
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  if (parsedUrl.pathname === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (parsedUrl.pathname === "/api/users") {
    res.end(`Hello, ${query.name || "Guest"}!`);
  } else if (parsedUrl.pathname === "/greet/users") {
    res.end(`Welcome ${query.name || "Anonymous"}`);
  } else {
    res.end("404 - not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// url = http://localhost:3000/api/users?name=John
// output : Hello John
