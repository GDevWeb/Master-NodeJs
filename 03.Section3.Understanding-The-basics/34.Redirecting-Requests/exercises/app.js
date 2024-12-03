/* 
Mini-Exercise

1.Create a Node.js server that:

  Redirects /old to /new with a 301 Moved Permanently status.
  Redirects /temporary to /temp-destination with a 302 Found status.

2.Enhance the server to:
  Redirect /search?q=node to an external URL like https://www.google.com/search?q=node.
*/

const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  const parsedUrl = url.parse(reqUrl, true);

  if (reqUrl === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Welcome on my homepage powered by Nodejs !</h1>");
  } else if (reqUrl === "/old") {
    res.writeHead(301, { Location: "/new" });
    res.end();
  } else if (reqUrl === "/temporary") {
    res.writeHead(302, { Location: "temp-destination" });
    res.end("<h1>Temporary Redirect Target</h1>");
  } else if (
    parsedUrl.pathname === "/search" &&
    parsedUrl.query.q === "node" &&
    method === "GET"
  ) {
    res.writeHead(301, { Location: "https://www.google.com/search?q=node" });
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 - page not found !</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
