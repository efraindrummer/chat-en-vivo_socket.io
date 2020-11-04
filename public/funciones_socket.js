
const socket = io.connect();

socket.on('nuevo_usuario', function(datos) {
    alert("nuevo usuario conectado: " + datos.user);
});

socket.on('nuevo_mensaje', function(datos) {
    $('#content-message').append('<p><strong>'+ datos.user +' : </strong>'+ datos.mensaje + '</p>');
});

function logear(correo, usuario) {
    socket.emit('datos_usuario', { correo: correo, usuario: usuario });
}

function enviar_msj(usuario, mensaje) {
    mensaje = $('#mensaje').val();
    socket.emit('send_mensaje', {mensaje: mensaje, usuario: usuario});
}