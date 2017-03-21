const http = require('http');
const fs = require('fs')

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log("Request to " + req.url + " recieved")

    fs.readFile("." + req.url, function(err, html) {
        if (err) {
            console.log(err);
        }

        res.writeHeader(200, { "Content-Type": "text/html" });
        res.end(html);
    });
    return;
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});