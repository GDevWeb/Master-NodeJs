/* 
Mini-Exercise
1.Create a Node.js server that:

  ✅Responds with plain text for /.
  ✅Returns JSON data for /api.
  ✅Serves an HTML page for /about.
  ✅Handles 404 errors for undefined routes.

  2.Add a feature to:

  ✅Log all incoming requests with their method and URL.
  ✅Serve a static file (like styles.css) when requested.
*/

const http = require("http");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  try {
    console.log("inputted url :", url);
    console.log("inputted method :", method);
  } catch (error) {
    console.error("Error :", error);
  }

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome on my HomePage engines by NodeJs server");
      break;
    case "/api":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "Welcome on my API powered by NodeJs" })
      );
      break;
    case "/about":
      fs.readFile("./pages/about.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error loading page");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;

    // Serve the static CSS file
    case url === "/styles":
      fs.readFile("./styles.css", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 - File Not Found");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(data);
        }
      });
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
      break;
  }
});

server.listen(port, () => {
  console.log(`Sever running on http://localhost:${port}`);
  console.log(`ℹ️ To stop the server input "CTRL+C"`);
});
