const http = require("http");

//enabling interation with file system
const fs = require("fs");

http.createServer((request, response) => {
    fs.readFile("../contact.html", (err, data) => {
        if(err) throw err;

        response.writeHead(200, {
            "Content-Type":"text/html"
        });
        response.write(data);
        response.end();        
    });       
}).listen(3000);
console.log("Render Successful");