const http = require("http");

//fs - module enables interation with the file system
var fs = require("fs");

//path - path of a folder
const path = require("path");

//writing to a file
// fs.writeFile("myFirstFile.txt", "Hello World", (err) => {
//     if(err) throw err;
//     console.log("file created succesfully");
// })

//Render Pages (reading file)
const server = http.createServer((request, response) => {
        if(request.url === '/') {
            let filePath = path.join(__dirname, '../home.html');

            fs.readFile(filePath, (err, data)=> {
                if(err) throw err;
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data)
                response.end();
            })
        }
})

const port = 1000;

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})