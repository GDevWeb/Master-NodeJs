/* 
Mini-Exercise
1.Create a Node.js server with the following routes:

  / (GET): Respond with "Welcome to the Home Page".
  /user?id=<id> (GET): Respond with "User ID: " or "User ID is required" if no ID is provided.
  /submit (POST): Respond with the data sent in the request body.

2.Add a wildcard route to handle all other undefined paths with a 404 message.
*/

const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  const parsedUrl = url.parse(req.url, true);

  // GET request for homepage
  if (reqUrl === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome on my homepage</h1>");
  }
  // GET request for /user with query parameter
  else if (parsedUrl.pathname === "/user" && method === "GET") {
    const { id } = parsedUrl.query;
    if (id) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Welcome User: ${id}`);
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("User ID is required");
    }
  }
  // POST request to homepage
  else if (reqUrl === "/" && method === "POST") {
    let body = "";

    // Collect data chunks
    req.on("data", (chunk) => {
      body += chunk;
    });

    // Once all data is received
    req.on("end", () => {
      if (body.trim() !== "") {
        try {
          const parsedBody = JSON.parse(body);
          res.writeHead(200, { "Content-Type": "application/json" });
          console.log(parsedBody);
          res.end(
            JSON.stringify({ message: "Data received", data: parsedBody })
          );
        } catch (error) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ message: "Invalid JSON", error: error.message })
          );
        }
      } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Body content is empty");
      }
    });
  }
  // 404 for undefined routes
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Erreur 404 - Page Not Found !</h1>");
  }
});

server.listen(port, () => {
  console.info(`Server running on port: ${port}`);
  console.info("To stop the server, input CTRL+C");
});
