const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Test");
  res.end();
});

server.listen(3000, () => console.log("Server run open http://localhost:3000"));
