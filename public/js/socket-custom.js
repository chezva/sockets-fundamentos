var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conección con el servidor');
});

// Enviar información
socket.emit('enviarAccion', {
    ubicacion: 'sala',
    accion: 'on'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// Escuchar información
socket.on('leerAccion', function(data) {
    console.log('Servidor: ', data);
});