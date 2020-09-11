const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    // client.emit('leerAccion', {
    //     ubicacion: 'sala',
    //     estado: 'off'
    // });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarAccion', (data, callback) => {

        client.broadcast.emit('leerAccion', data);


        // if (accion.ubicacion) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!'
        //     });
        // }


    });


});