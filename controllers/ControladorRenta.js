export class ControladorRenta {
    constructor() { }

    buscarTodos(request,response){try {
        response.status(200).json({
            "estado":true,
            "mensaje":"Lista de rentas",
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje": "fallamos"+ error,
            "datos":null
        })
    }}
    buscarPorId(request,response){try {
        //1. Hay que recibir datos (si)
        let id = request.params.id;
        //2. con el id que mando el cliente busco la renta en BD
        //3. Respondo al cliente
        response.status(200).json({
            "estado":true,
            "mensaje":"renta por ID "+id,
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje": "fallamos"+ error,
            "datos":null
        })
    }}
    modificar(request,response){try {
        //1. hay que recibir los datos del cliente (si)
        let id = request.params.id
        let modificaRenta = request.body
        //2.con los datos del cliente y el id lo actualizo en bd
        //3.responde al cliente
        response.status(200).json({
            "estado":true,
            "mensaje":"modificada renta "+id,
            "datos":null
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje": "fallamos"+ error,
            "datos":null
        })
    }}
    registrar(request,response){try {
        //1. hay que recibir los datos del cliente (si)
        let registrarRenta = request.body
        //2. con los datos del cliente lo registro en bd
        //3. responde al cliente
        response.status(200).json({
            "estado":true,
            "mensaje":"registrada renta",
            "datos":null
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje": "fallamos"+ error,
            "datos":null
        })
    }}
    eliminar(request,response){try {
        //1. hay que recibir los datos del cliente (si)
        let id = request.params.id
        //2. con los datos del cliente lo elimino de la bd
        //3. responde al cliente
        response.status(200).json({
            "estado":true,
            "mensaje":"eliminada renta "+id,
            "datos":null
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje": "fallamos"+ error,
            "datos":null
        })
    }}
}