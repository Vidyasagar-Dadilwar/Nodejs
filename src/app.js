const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const {v4:uuidv4}=require('uuid')
  console.log("Unique identifier: ");
  console.log(uuidv4());
  res.end(`<h1>Welcome to the page</h1>
  <p>Your unique id is ${uuidv4()}</p>`);
});

const port=3000;
const host='127.0.0.1';
server.listen(port,host,()=>{
    console.log(`The server is running at http://${host}:${port}`);
})
