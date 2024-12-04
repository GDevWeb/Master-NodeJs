const http = require("http");

const routes = require("./routes/routes");

const server = http.createServer(routes);

/* ***Config*** */
const port = 3000;

/* ***Event*** */
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.once("startingServer", () => {
  console.log(`Server running on "http://localhost:${port}"`);
  console.log(`To stop the server type "CTRL+C"`);
});

server.listen(port, () => {
  eventEmitter.emit("startingServer");
});
