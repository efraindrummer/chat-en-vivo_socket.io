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

    socket.on('datos_usuario', function(datos){
        console.log('correo: '+ datos.correo + ' usuario: '+ datos.usuario);
        io.emit('nuevo_usuario', {user: datos.usuario});
    });

    socket.on('send_mensaje', function(datos){
        console.log(datos.usuario + ' esta enviando un mensaje ');
        io.emit('nuevo_mensaje', {user: datos.usuario, mensaje: datos.mensaje});
    });

});