const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const puerto = 3001;

const archivoDb = require('./config/conexion')

//Rutas
const equipoRt = require('./rutas/equipoRt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/equipo', equipoRt);

app.get('/', (request, response) => {
    response.end("Este es el servidor back");
});

//Configuración
app.listen(puerto, function(){
    console.log("El servidor está corriendo en el puerto: ", puerto);
});

//https://www.youtube.com/watch?v=8s_ZbPkPkRk
//1:40:00