// const express = require('express')
// const app = express()
//importando la herramientoa
import  express  from "express"
const app = express()

//atendiendo peticiones usuario
app.post('/api/usuarios', function (req, res) {
  res.send('Registrando Usuario')
})
app.get('/api/usuarios', function (req, res) {
  res.send('Estos son todos los usuarios')
})
app.get('/api/usuario', function (req, res) {
  res.send('Usuario encontrado')
})
app.put('/api/usuarios', function (req, res) {
  res.send('Modificando Usuarios')
})
app.delete('/api/usuarios', function (req, res) {
  res.send('Eliminando Usuario')
})

//atendiendo peticiones Vehiculos
app.post('/api/vehiculos', function (req, res) {
  res.send('Registrando Vehiculo')
})
app.get('/api/vehiculos', function (req, res) {
  res.send('Estos son todos los vehiculos')
})
app.get('/api/vehiculo', function (req, res) {
  res.send('vehiculo encontrado')
})
app.put('/api/vehiculos', function (req, res) {
  res.send('Modificando vehiculo')
})
app.delete('/api/vehiculos', function (req, res) {
  res.send('Eliminando Vehiculo')
})

//atendiendo peticiones RentaVehiculos
app.post('/api/rentas', function (req, res) {
  res.send('Registrando Renta')
})
app.get('/api/rentas', function (req, res) {
  res.send('Estos son todos las Rentas')
})
app.get('/api/rentas', function (req, res) {
  res.send('Renta encontrada')
})
app.put('/api/vehiculos', function (req, res) {
  res.send('Modificando Renta')
})
app.delete('/api/vehiculos', function (req, res) {
  res.send('Eliminando Renta')
})

//levantando un servidor
app.listen(3000,function(){console.log('servidor operando...')})