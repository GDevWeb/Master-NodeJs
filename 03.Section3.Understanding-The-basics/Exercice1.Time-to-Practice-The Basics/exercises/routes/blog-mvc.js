const fs = require("fs");
const path = require("path");

const getHtmlContent = (filePath) => {
  return fs.readFileSync(path.join(__dirname, "../views", filePath), "utf-8");
};

const header = getHtmlContent("header.html");
const footer = getHtmlContent("footer.html");

const routesHandler = (req, res) => {
  const { pathname } = require("url").parse(req.url, true);

  let body = "";

  switch (pathname) {
    case "/":
      body = "<h2>Welcome to the homepage!</h2>";
      break;
    case "/add":
      body = "<h2>Perform addition here!</h2>";
      break;
    case "/subtraction":
      body = "<h2>Perform subtraction here!</h2>";
      break;
    case "/multiply":
      body = "<h2>Perform multiply here!</h2>";
      break;
    case "/divide":
      body = "<h2>Perform divide here!</h2>";
      break;
    default:
      body = "<h2>Page not found!</h2>";
  }

  // Combine header, body, and footer
  const responseHtml = `${header}${body}${footer}`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(responseHtml);
};

module.exports = routesHandler;
