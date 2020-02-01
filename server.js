const express = require('express');
const app=express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('./gol/index.html');
});

server.listen(3000);
 