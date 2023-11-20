//esta clase representa un servidor
//importando la herramientas
import express from "express"
import { rutaAPI } from "./routes/rutasUsuarios";

export class Api {

    constructor() {
        this.app = express();
        this.atenderPeticiones()
    }

    //levantar el servidor
    levantarServidor() {
        this.app.listen(3000, function () { console.log('servidor operando...') })
    }
    //Atiende las peticiones y responde
    atenderPeticiones() {
        //atendiendo peticiones usuario
        this.app.use("/",rutaAPI)
       
        //atendiendo peticiones Vehiculos
        this.app.post('/api/vehiculos', function (req, res) {
            res.send('Registrando Vehiculo')
        })
        this.app.get('/api/vehiculos', function (req, res) {
            res.send('Estos son todos los vehiculos')
        })
        this.app.get('/api/vehiculo', function (req, res) {
            res.send('vehiculo encontrado')
        })
        this.app.put('/api/vehiculos', function (req, res) {
            res.send('Modificando vehiculo')
        })
        this.app.delete('/api/vehiculos', function (req, res) {
            res.send('Eliminando Vehiculo')
        })

        //atendiendo peticiones RentaVehiculos
        this.app.post('/api/rentas', function (req, res) {
            res.send('Registrando Renta')
        })
        this.app.get('/api/rentas', function (req, res) {
            res.send('Estos son todos las Rentas')
        })
        this.app.get('/api/rentas', function (req, res) {
            res.send('Renta encontrada')
        })
        this.app.put('/api/vehiculos', function (req, res) {
            res.send('Modificando Renta')
        })
        this.app.delete('/api/vehiculos', function (req, res) {
            res.send('Eliminando Renta')
        })
    }
    //Se conecta a la Base de datos

}