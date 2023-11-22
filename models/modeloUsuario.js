import mongoose from "mongoose";

const Schema = mongoose.Schema

const rolesValidos = {
    values: ["admin", "usuario"],
    message: "{VALUE} no es un rol válido",
  };

const Usuario = new Schema({
    Usuario: {
        type: String,
        required: [true, "El nombre del usuario es requerido"]
    },
    nombre: {
        type: String,
        required: [true, "El nombre completo es requerido"],
    },
    contraseña: {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    role: {
        type: String,
        enum: rolesValidos,
        default: "usuario",

    },
    palabraClave: {
        type: String,
        required: [true, "La Palabra Clave es requerida"]
    }
})

export const modeloUsuario=mongoose.model('Usuarios',Usuario)