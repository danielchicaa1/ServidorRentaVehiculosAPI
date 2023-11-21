//espacio para definir las rutas o endpoints especificos de su API

import express from 'express'

//importo los controladores
import { ControladorUsuario } from '../controllers/ControladorUsuario.js';
import { ControladorVehiculo } from '../controllers/ControladorVehiculo.js';
import { ControladorRenta } from '../controllers/ControladorRenta.js';

let controladorUsuario = new ControladorUsuario()
let controladorVehiculo = new ControladorVehiculo()
let controladorRenta = new ControladorRenta()

export let rutaAPI = express.Router();

//aca poner los endpoints
rutaAPI.post('/api/usuarios',controladorUsuario.registrar)
rutaAPI.get('/api/usuarios',controladorUsuario.buscarTodos)
rutaAPI.get('/api/usuario/:id',controladorUsuario.buscarPorId)
rutaAPI.put('/api/usuarios/:id',controladorUsuario.modificar)
rutaAPI.delete('/api/usuarios/:id',controladorUsuario.eliminar)

//atendiendo peticiones Vehiculos
rutaAPI.post('/api/vehiculos',controladorVehiculo.registrar)
rutaAPI.get('/api/vehiculos',controladorVehiculo.buscarTodos)
rutaAPI.get('/api/vehiculo/:id',controladorVehiculo.buscarPorId)
rutaAPI.put('/api/vehiculos/:id',controladorVehiculo.modificar)
rutaAPI.delete('/api/vehiculos/:id',controladorVehiculo.eliminar)

//atendiendo peticiones RentaVehiculos
rutaAPI.post('/api/rentas',controladorRenta.registrar)
rutaAPI.get('/api/rentas',controladorRenta.buscarTodos)
rutaAPI.get('/api/renta/:id',controladorRenta.buscarPorId)
rutaAPI.put('/api/rentas/:id',controladorRenta.modificar)
rutaAPI.delete('/api/rentas/:id',controladorRenta.eliminar)