const url = require("url");
const fs = require("fs");
const path = require("path");

const getHTMLContent = (filePath) => {
  return fs.readFileSync(path.join(__dirname, "../views", filePath), "utf-8");
};

const header = getHTMLContent("header.html");
const footer = getHTMLContent("footer.html");

let body = "";

// utils
const {
  addition,
  subtraction,
  multiply,
  divide,
} = require("../utils/arithmetic");
const { TEXTHTML, TEXTPLAIN } = require("../utils/constHeaders");

/* ***Server*** */
const routesHandler = (req, res) => {
  const reqUrl = req.url;
  const parseUrl = url.parse(reqUrl, true);
  const pathName = parseUrl.pathname;
  const query = parseUrl.query;

  const num1 = parseFloat(query.num1);
  const num2 = parseFloat(query.num2);

  let result = 0;

  /* ***Debug*** */
  console.log("parseUrl:", parseUrl);
  console.log("num1:", num1);
  console.log("num2:", num2);

  if (
    ["/add", "/subtraction", "/multiply", "/divide"].includes(pathName) &&
    (isNaN(num1) || isNaN(num2))
  ) {
    res.writeHead(400, TEXTPLAIN);
    res.end("Invalid numbers provided in query parameters.");
    return;
  }

  switch (pathName) {
    case "/":
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error loading page");
        } else {
          res.writeHead(200, TEXTHTML);
          res.end(data);
        }
      });
      break;
    case "/add":
      result = addition(num1, num2);
      res.writeHead(200, TEXTPLAIN);
      res.end(`The sum of ${num1} and ${num2} is: ${result}`);
      break;
    case "/subtraction":
      res.writeHead(200, TEXTPLAIN);
      result = subtraction(num1, num2);
      console.log(result);
      res.end(`The difference of ${num1} and ${num2} is : ${result} `);
      break;
    case "/multiply":
      res.writeHead(200, TEXTPLAIN);
      result = multiply(num1, num2);
      res.end(`The product of ${num1} and ${num2} is: ${result} `);
      break;
    case "/divide":
      res.writeHead(200, TEXTPLAIN);
      result = divide(num1, num2);
      console.log(result);
      res.end(`The quotient of ${num1} and ${num2} is : ${result} `);
      break;
    default:
      fs.readFile("./pages/404.html", (_err, data) => {
        res.writeHead(404, TEXTHTML);
        res.end(data);
      });
      break;
  }
  return;
};

module.exports = routesHandler;
