//espacio para definir las rutas o endpoints especificos de su API

import express from 'express'

export let rutaAPI = express.Router();

//aca poner los endpoints
rutaAPI.post('/api/usuarios')
rutaAPI.get('/api/usuarios')
rutaAPI.get('/api/usuario/:id')
rutaAPI.put('/api/usuarios/:id')
rutaAPI.delete('/api/usuarios/:id')

//atendiendo peticiones Vehiculos
rutaAPI.post('/api/vehiculos')
rutaAPI.get('/api/vehiculos')
rutaAPI.get('/api/vehiculo/:id')
rutaAPI.put('/api/vehiculos/:id')
rutaAPI.delete('/api/vehiculos/:id')

//atendiendo peticiones RentaVehiculos
rutaAPI.post('/api/rentas')
rutaAPI.get('/api/rentas')
rutaAPI.get('/api/renta/:id')
rutaAPI.put('/api/rentas/:id')
rutaAPI.delete('/api/rentas/:id')