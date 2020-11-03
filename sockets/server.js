//conexion con express y socket io
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

server.listen(4000);
//especificacion de la ruta
app.use(express.static('public'));

const socketIO = require('socket.io');
const io = socketIO.listen(server);

//evitar escuchar con listen, usar el metodo on
io.on('connect', function(socket){
    console.log('nueva conexion id: '+ socket.id);
});