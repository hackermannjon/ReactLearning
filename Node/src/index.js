const { module: myModule } = require("./my-modules");
const { readFile, readFileSync } = require("fs");

readFile("./hello.txt", "utf-8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
	} else {
		console.log("File content:", data);
	}
});

const txt = readFileSync("./hello.txt", "utf-8");
console.log("Synchronous file read:", txt);

console.log("Hello from Node.js!");

process.on("exit", (code) => {
	console.log(`Process exited with code: ${code}`);
});

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("customEvent", (message) => {
	console.log(`Custom event received: ${message}`);
});

eventEmitter.emit(
	"customEvent",
	"This is a test message for the custom event."
);
eventEmitter.emit(
	"customEvent",
	"This is another test message for the custom event."
);

myModule();
