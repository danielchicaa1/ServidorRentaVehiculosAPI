//espacio para definir las rutas o endpoints especificos de su API

import express from 'express'

export let rutaAPI = express.Router();

//aca poner los endpoints
rutaAPI.post('/api/usuarios', function (req, res) {
    res.send('Registrando Usuario')
})
rutaAPI.get('/api/usuarios', function (req, res) {
    res.send('Estos son todos los usuarios')
})
rutaAPI.get('/api/usuario', function (req, res) {
    res.send('Usuario encontrado')
})
rutaAPI.put('/api/usuarios', function (req, res) {
    res.send('Modificando Usuarios')
})
rutaAPI.delete('/api/usuarios', function (req, res) {
    res.send('Eliminando Usuario')
})