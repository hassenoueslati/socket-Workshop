var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(_dirname + '/public'));
app.get ('/', function(req, res, next) {
    res.sendFile(_dirname +'/index.html');
});
server.listen(3000);