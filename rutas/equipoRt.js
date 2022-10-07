const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const equipoSchema = new schema({
    nombre:String,
    imagen: String,
    idEquipo: String
});

const equipoMl = mongoose.model('equipos', equipoSchema);

module.exports = router;

// router.get('/ejemplo', (req, res) => {
//     res.end('ruta prueba')
// })

router.get('/obtenerEquipos', (req, res) => {
    equipoMl.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})

router.post('/agregarEquipo', (req, res) => {
    const nuevoEquipo = new equipoMl({
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        idEquipo: req.body.idEquipo
    })
    nuevoEquipo.save(function(err){
        if(!err){
            res.send('Equipo agregado')
        } else{
            res.send(err)
        }
    })
})