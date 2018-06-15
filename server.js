var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dist'));
app.listen(4200);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});