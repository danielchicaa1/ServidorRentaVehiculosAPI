import { modeloRenta } from "../models/modeloRenta"
export class ServicioRenta {
    constructor() {}

    async registrar(datos){
        let RentaNueva=new modeloRenta(datos)
        return await RentaNueva.save()
    }

    async buscarTodas(){
        let Rentas=await modeloRenta.find()
        return Rentas
    }
    async buscarPorId(id){
        let Renta=await modeloRenta.findById(id)
        return Renta
    }
    async modificar(id,datos){
        return await modeloRenta.findByIdAndUpdate(id,datos)
    }
    
    // completar
    async eliminar(id){
        let reserva=await modeloRenta.findByIdAndRemove(id)
        return reserva
            
    } 
    
}