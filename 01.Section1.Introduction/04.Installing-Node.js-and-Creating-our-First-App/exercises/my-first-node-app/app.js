const http = require("http");
const fs = require("fs");

/* My first doc */
fs.writeFileSync("HelloWorld.txt", "Hello world from nodejs");
/* Mon premier server */
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello world from nodejs");
});

server.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
