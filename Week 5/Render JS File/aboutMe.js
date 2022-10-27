const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    fs.readFile("../about.html",(err, data) => {

        if(err) throw err;

        response.writeHead(200, {
            "Content-Type":"text/html"
        });
        response.write(data);
        response.end();
    });

}).listen(2000);
console.log("Render Successful");