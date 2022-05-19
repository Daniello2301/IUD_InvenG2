const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: [true, 'Name require']
    },
    email: {
        type: String,
        require: [true, 'Email require'],
        unique: true
    },
    estado: {
        type: String,
        require: true,
        enum: ['Activo', 'Inactivo']
    }
},
{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);