export class ControladorVehiculo {
    constructor() { }

    buscarTodos(request, response) {
        try {
            response.status(200).json({
                "estado": true,
                "mensaje": 'Lista de Vehiculos',
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    buscarPorId(request, response) {
        try {
            //1 hay que recibir datos(si)
            let id = request.params.id;
            //2. con el id que mando el cliente busco la vehiculo en BD
            //3. si lo encuentro devuelvo los resultados
            response.status(200).json({
                "estado": true,
                "mensaje": 'Vehiculo por id',
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    modificar(request, response) {
        try {
            //1 hay que recibir datos(si)
            let id = request.params.id;
            let modificarVehiculo = request.body
            //2.con los datos del vehiculo y el id lo actualizo en bd
            //3.devuelvo mensaje de exito
            response.status(200).json({
                "estado": true,
                "mensaje": 'Modificacion exitosa',
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    registrar(request, response) {
        try {
            //1 hay que recibir datos(si)
            let registroVehiculo = request.body
            //2.lo guardo en bd
            //3.devuelvo mensaje de exito
            response.status(200).json({
                "estado": true,
                "mensaje": 'Registrado correctamente',
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    eliminar(request, response) {
        try {
            //1 hay que recibir datos(si)
            let id = request.params.id;
            //2.elimino el dato en la bd
            //3.devuelvo mensaje de exito
            response.status(200).json({
                "estado": true,
                "mensaje": 'Eliminado Correctamente',
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
}