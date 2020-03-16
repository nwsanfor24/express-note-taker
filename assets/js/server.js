//Declare installed frameworks
const express = require('express');
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const notes = require('./notes');


//Active note item

app.get('/api/notes/get/:index', function(req, res) {
    const userIndex = req.params.index;
    return res.json(notes[userIndex]);
});

//Save notes

app.post('/api/notes/save', function(req, res) {
    const {title, content, dataIndex} = req.body;

    if (dataIndex === null) {
        notes.push({title, content});
        const newIndex = notes.length - 1;
        return res.send(newIndex.toString());
    } else {
        notes[dataIndex] = {title, content};
        return res.end();
    }
});

//Delete notes

app.delete('/api/notes/delete/:index', function(req, res) {
    const deleteIndex = parseInt(req.params.index);

    notes.splice(deleteIndex, 1);

    return res.end();
});


require("./routes")(app);

// Starts our server
app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});



