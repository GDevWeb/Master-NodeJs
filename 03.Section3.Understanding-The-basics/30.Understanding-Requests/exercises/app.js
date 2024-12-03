/* 
Mini-Exercise
1.Create a Node.js server that:

  Responds with a greeting message for /hello.
  Extracts and logs query parameters for /search.
  Accepts and logs JSON data sent to /submit.

2.Enhance the server to:

  Respond with a 404 message for undefined routes.
  Handle invalid JSON gracefully.
*/

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome on my homepage");
  } else if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello");
  } else if (parsedUrl.pathname === "/search") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`You searched for: ${query.query || "nothing"}`);
  } else if (
    req.method === "POST" &&
    parsedUrl.pathname === "/data" &&
    req.headers["content-type"] === "application/json"
  ) {
    let body = "";

    // Collect incoming data
    req.on("data", (chunk) => {
      body += chunk;
    });

    // Once all data is received
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        console.log("Request body:", data);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Data received!", data }));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: "Invalid JSON", error: error.message })
        );
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found!");
  }
});

server.listen(3000, () => {
  console.log("Server is running on the port: 3000");
});
