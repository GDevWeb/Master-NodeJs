/* 
Mini-Exercise
1.Write a Node.js server that:
  Accepts plain text data from POST requests.
  Logs the body to the console and responds with "Text Received."

2.Extend the server to:
  Parse and log JSON payloads.
  Respond with a JSON object confirming receipt of the data.

3.Bonus: Add support for form data using the querystring module.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  const { reqUrl, method } = req;

  if (method === "POST" && req.headers["content-type"] === "application/json") {
    let body = "";

    // handle the end of the stream
    // req.on("end", () => {
    //   console.log("Body:", body);
    //   res.writeHead(200, { "Content-Type": "text/plain" });
    //   res.end("Body received");
    // });

    // collect chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const jsonData = JSON.parse(body);
      console.log("JSON Data:", jsonData);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(JSON.stringify({ message: "Data received", data: jsonData }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    // res.end("404 - not found !");
    res.end("Invalid Request");
  }
});

server.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
