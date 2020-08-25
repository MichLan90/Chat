var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('./public'))

io.on('connection', (socket) => {
    console.log('a user has connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});