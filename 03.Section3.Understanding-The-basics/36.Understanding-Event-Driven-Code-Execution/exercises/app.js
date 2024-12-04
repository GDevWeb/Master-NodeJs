/* 
Mini-Exercise
1.Create an EventEmitter instance and:
  Define a custom event called calculate.
  Attach a listener to perform addition when calculate is emitted.
  Emit the event with two numbers as arguments.

2. Add another listener for the same calculate event to log the result.

3.Use the once method to create a listener that displays a "Welcome!" message the first time the server   starts.
*/

/* 
1.Create an EventEmitter instance and:
  Define a custom event called calculate.
  Attach a listener to perform addition when calculate is emitted.
  Emit the event with two numbers as arguments.
*/

const http = require("http");
const port = 3000;

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// register an event listener
eventEmitter.on("calculate", (a, b) => {
  console.log(`Sum : ${a + b}`);
});

// 2. Add another listener for the same calculate event to log the result.
eventEmitter.emit("calculate", 5, 5); //10

// 3.Use the once method to create a listener that displays a "Welcome!" message the first time the server starts.
eventEmitter.once("start", () => {
  console.log("Welcome! The server has started.");
});

const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  const method = req.method;

  console.log(`Incoming Request: ${reqUrl} [${method}]`);

  if (reqUrl === "/" && method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welcome on my homePage powered by Nodejs");
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("404 - not Found !");
  }
});

server.listen(port, () => {
  console.log(`Server running on localhost : ${port}`);
  eventEmitter.emit("start");
});
