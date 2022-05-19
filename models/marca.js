const mongoose = require('mongoose');

const MarcaSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: [true, 'Name require']
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

module.exports = mongoose.model('Marca', MarcaSchema);