import { modeloVehiculo } from "../models/modeloVehiculo"
export class ServicioVehiculo {
  constructor() {}

  async registrar(datos) {
    let VehiculoNuevo= modeloVehiculo(datos)
    return await VehiculoNuevo.save()
  }

  async buscarTodas() {
    let vehiculos=await modeloVehiculo.find()
    return vehiculos
  }
  async buscarPorId(id) {
    let vehiculo=await modeloVehiculo.findById(id)
    return vehiculo
  }
  async modificar(id, datos) {
    return await modeloVehiculo.findByIdAndUpdate(id,datos)
  }
  
  async eliminar(id) {
    return await modeloVehiculo.findByIdAndDelete(id)
  }
}