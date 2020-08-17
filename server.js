const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;
const router = require('./router');

io.on('connection', socket => {
  console.log('user connected!!!');
  socket.on('disconnect', () => console.log('user disconnect!!!'))
});

app.use(router);

server.listen(PORT, () => {
  console.log(`server listing on port - ${PORT}`);
});
