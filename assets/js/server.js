//Declare installed frameworks
const express = require('express');
const fs = require("fs");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create our server
var server = http.createServer(handleRequest);


// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});



