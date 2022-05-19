const mongoose = require('mongoose');
const usuario = require('./usuario');

const TipoEquipoSchema = mongoose.Schema({
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
        require: true
    }
},
{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model('TipoEquipo', TipoEquipoSchema);