const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on("sayHello", (e, callback) => {
  e.test = "World";

  callback(e);
});

emitter.on("sayHello", (e, callback) => {
  e.message = "Test";

  callback(e);
});

const e = { message: "Hello" };
emitter.emit("sayHello", e, (data) => {
  console.log(data);
});
