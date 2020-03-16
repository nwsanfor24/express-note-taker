//Declare installed frameworks
const express = require('express');
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const notes = require('./assets/js/notes');

//Active note item

app.get('/api/notes/get/:index', function(req, res) {
    const userIndex = req.params.index;
    return res.json(notes[userIndex]);
});

//Save notes

app.post('/api/notes/save', function(req, res) {
    const {title, content, favorite, data}
})



// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});



