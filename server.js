"use strict";
const http = require("http");
const quote = require("./quote");

console.log(quote);



 http.createServer((request, response) => {
   console.log("The server is running on port 8080.");
   response.writeHead(200, {
     "Content-type": "text/plain"
   });
   response.write(`${quote[Math.floor(Math.random() * quote.length)
   ]}`);
   response.end();
 }).listen(8080); 