var app = require('express')();
const cors = require('cors');
app.use(cors());
var server = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/img', function(req, res) {
    res.sendFile(__dirname + '/text.png');
});

server.listen(8000);
