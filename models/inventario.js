const mongoose = require('mongoose');

const InventarioSchema = mongoose.Schema({

    serial:{
        type: String,
        require: true,
        unique: true
    },
    modelo:{
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    foto:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    fechaCompra:{
        type: Date,
        require: true
    },
    usuario:{
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario'
    },
    marca:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Marca' 
    },
    tipoEquipo:{
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'TipoEquipo'
    },
    estadoEquipo:{
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'EstadoEquipo'
    }
},
{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model('Inventario', InventarioSchema);