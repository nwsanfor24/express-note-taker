// Routes
// ============================================
module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        return fs.json(notes);
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, 'public/notes.html'));
    });
}

