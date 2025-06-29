const mongoose = require('../config/connection')

const schemaUsuario = new mongoose.Schema({
    correo: {
        type: String,
        require: [true, "El correo es obligatorio" ], //El valor que quiero que se cumpla, y lo que sale cuando no se cumple;
        unique: [true, "El correo ingresado ya se encuentra registrado"],
        lowercase: true, 
        trim: true, 
        match: [/\S+@\S+\.\S+/, 'El correo ingresado no es válido'],
    },
    contrasena:{
        type: String,
        require: [true, "La contraseña es obligatoia"],
        minLength: [7, "El contraseña debe tener mínimo 8 carácteres"],
        validate: {
            validator: function(value) {
            return /^(?=.*[A-Z])(?=.*\d).+$/.test(value);
            },
            message: 'La contraseña debe contener al menos una mayúscula y un número'
        }
    },
    fechaInscripcion: {
        type: Date,
        default: Date.now,
    }

});

const Usuario = mongoose.model ('Usuario', schemaUsuario);

module.exports = Usuario;