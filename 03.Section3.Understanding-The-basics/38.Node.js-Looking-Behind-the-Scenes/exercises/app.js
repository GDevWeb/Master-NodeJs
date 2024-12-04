/* 
Mini-Exercise
1.Write a Node.js script that:
  Reads two files asynchronously and logs their contents.
  Creates an HTTP server that responds with "Hello, Event Loop!".

2. Modify the script to:
  Use setTimeout and setImmediate to demonstrate their execution order.

*/

const http = require("http");
const port = 3000;
const fsp = require("fs").promises;

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/* ***Exercise 1*** */
const myFile1 = "./docs/myfile1.txt";
const myFile2 = "./docs/myfile2.txt";

const readingFile = async (paramFile) => {
  try {
    const data = await fsp.readFile(paramFile, "utf-8");
    console.log(data);

    await fsp.writeFile(paramFile, "Writing file");
    setTimeout(() => {
      console.log("Writing complete");
    }, 5000);
  } catch (err) {
    console.error("Error:", err.message);
  }
};
readingFile(myFile1);
readingFile(myFile2);

/* ***Exercise 2*** */
eventEmitter.once("startingServer", () => {
  console.log(`Welcome, the server running on "http://localhost:${port}"`);
});

const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  const method = req.method;

  if (reqUrl === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Event Loop!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found !");
  }
});

server.listen(port, () => {
  console.log(`Server running on "http://localhost:${port}"`);
  eventEmitter.emit("startingServer");
});
