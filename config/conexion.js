const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/proyectoTIC');

const objetoDb = mongoose.connection;

objetoDb.on('connected', () =>{
    console.log("Conexión correcta")
});
objetoDb.on('error', () =>{
    console.log("Error en la conexión")
});

module.exports = mongoose;