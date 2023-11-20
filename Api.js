//esta clase representa un servidor
//importando la herramientas
import express from "express"
import { rutaAPI } from "./routes/rutas.js";

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
        this.app.use("/",rutaAPI)

        //atendiendo peticiones RentaVehiculos
        this.app.use("/",rutaAPI)
    }
    //Se conecta a la Base de datos

}