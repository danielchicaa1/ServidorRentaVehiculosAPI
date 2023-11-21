export class ControladorUsuario {
    constructor() { }

    async buscarTodos(request, response) {
        try {
            response.status(200).json({
                "estado": true,
                "mensaje": 'Lista de usuarios',
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    async buscarPorId(request, response) {
        try {
            //1.Hay que recibir datos(si)
            let id = request.params.id
            //2. con el id que mando el cliente busco la habitacion en BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje": 'usuario por id',
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    async modificar(request, response) {
        try {
            //1.Hay ue recibir datos (si)
            let id = request.params.id
            let datosModificar = request.body
            //2.con los datos del cliente y el id lo actualizo en bd
            //3.Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje": 'usuario actualizado',
                "datos": null
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }
    }
    async registrar(request, response) {
        try {
            //1.Hay que recibir datos (si)
            let registrarUsuario = request.body
            //2.los registros de usuarios se guardan en una tabla llamada Usuarios
            //3.Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje": 'usuario creado',
                "datos": null
            })
        } catch (error) {
            response.status(400).json({
                "estado": false,
                "mensaje": "fallamos" + error,
                "datos": null
            })
        }

    }

    async eliminar(request, response) {
        try {
            //1.Hay que recibir datos (si)
            let id = request.params.id
            //2.eliminar un usuario por su id
            //3.Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje": 'usuario borrado',
                "datos": null
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


