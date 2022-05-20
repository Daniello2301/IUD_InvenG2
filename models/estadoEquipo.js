const mongoose = require('mongoose');

const EstadoEquipoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: [true, 'Name require']
    },
    estado: {
        type: String,
        require: true,
        enum: ['Activo', 'Inactivo']
    },
    usuario:{
        typre: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: [true, 'Usuario requerido']
    }
},
{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model('EstadoEquipo', EstadoEquipoSchema);