//Declare installed frameworks
const express = require('express');
const bodyParser = require('body-parser');

//Call the express and body-parser
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

//Serving static files
app.use(express.static('public'));

//Installed ejs and created a file inside the views
app.set('view engine', 'ejs');

//Route for the app
app.get('/', function (req, res) {
    res.render('notes', {
        note: note
    });
});

//app.post option
app.post("/addNotes", function (req, res) {
    const userNote = {};
    userNote.id = Math.random() * 100;
    userNote.body = req.body.newNote
    note.push(userNote);

    res.redirect('/');
});

//Delete request

app.post('/deleteNote/:id', function(req, res) {
    console.log(req.params.id);
    const deleteNotes = note.filter(item => item.id != req.params.id);
    note = deleteNotes;
    return res.redirect('/');
});

//running server at Port 5000
app.listen(5000, function() {
    console.log("Notes App is running at port 5000");
});


