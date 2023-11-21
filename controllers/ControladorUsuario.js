export class ControladorUsuario {
    constructor() { }

    async buscarTodos(request,response){
        try {
            response.status(200).json({
                "estado":true,
                "mensaje": 'Lista de usuarios',
            })
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"fallamos"+error,
                "datos":null
        })
    }
}
    async buscarPorId(request,response){
        try {
            //1.Hay que recibir datos(si)
            let id = request.params.id
            //2. con el id que mando el cliente busco la habitacion en BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje": 'usuario por id',
            })
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"fallamos"+error,
                "datos":null
        })
        }
    }
    async modificar(request,response){
        try {
            
        } catch (error) {
            
        }
    }
    async registrar(request,response){
        try {
            
        } catch (error) {
            
        }
    }
    async eliminar(request,response){
        try {
            
        } catch (error) {
            
        }
    }
}}