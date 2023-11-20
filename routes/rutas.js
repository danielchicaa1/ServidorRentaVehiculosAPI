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

//atendiendo peticiones Vehiculos
rutaAPI.post('/api/vehiculos', function (req, res) {
    res.send('Registrando Vehiculo')
})
rutaAPI.get('/api/vehiculos', function (req, res) {
    res.send('Estos son todos los vehiculos')
})
rutaAPI.get('/api/vehiculo', function (req, res) {
    res.send('vehiculo encontrado')
})
rutaAPI.put('/api/vehiculos', function (req, res) {
    res.send('Modificando vehiculo')
})
rutaAPI.delete('/api/vehiculos', function (req, res) {
    res.send('Eliminando Vehiculo')
})

//atendiendo peticiones RentaVehiculos
rutaAPI.post('/api/rentas', function (req, res) {
    res.send('Registrando Renta')
})
rutaAPI.get('/api/rentas', function (req, res) {
    res.send('Estos son todos las Rentas')
})
rutaAPI.get('/api/renta', function (req, res) {
    res.send('Renta encontrada')
})
rutaAPI.put('/api/rentas', function (req, res) {
    res.send('Modificando Renta')
})
rutaAPI.delete('/api/vehiculos', function (req, res) {
    res.send('Eliminando Renta')
})