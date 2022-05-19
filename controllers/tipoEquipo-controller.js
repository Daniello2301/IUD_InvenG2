const TipoEquipo = require("../models/tipoEquipo");
const usuario = require("../models/usuario");
const Usuario = require('../models/usuario');

const getAll = async (req, res) => {
  const query = {};

  const response = await TipoEquipo.find(query);

  res.jsonp(response);
};


/*  Get All Tipos Equipos with Usuario state Active */
/* Inner Join to usuarios table */
const getTipoUsuarioActivo = async (req, res) => {
  try {
    const query = { estado: "Activo" };

    let response = await TipoEquipo.find(query).populate({
      path: "usuario",
      match: {
        estado: "Activo",
      },
    });

    response = response.filter((te) => te.estado != null);
    res.status(201).json(response);

  } catch (error) {
      res.status(500).json({msj: error});
  }
};


/* Get One Tipo called using id */
const getTiposById = async (req,res) => {

    try 
    {
        const { id } = req.params;

        const query = {_id : id}
        
        const response = await TipoEquipo.findById(query);

        res.status(200).json(response);
    } catch (error) {
        console.log(erro)
        res.status(500).json({msj: error})
    }
};


/* CREATE  Tipo Equipo*/
const createTipo = async (req,res) => {

    try 
    {
        console.log(req.body);
        
        const nombre = req.body.nombre.toUpperCase();
        const estado = req.body.estado;
        const email = req.body.usuario.email;
        
        const tipoEquipo = await TipoEquipo.findOne({nombre});      
        if(tipoEquipo) return res.status(500).json({mjs: "Ya existe el tipo"})

        const usuarioDB = await  Usuario.findOne({ email });
        if(!usuarioDB){ return res.status(404).json({mjs: "El usuario no existe"})};

        const data = {
            nombre,
            estado,
            usuario: usuario._id
        }

        const tipoEquipoSave = new TipoEquipo(data);

        tipoEquipoSave.save();

        res.status(201).json(tipoEquipo);
    } catch (error) {

        console.log(error)
        res.status(500).json({msj: error})
    }
};

const UpdateTipoById = async (req,res) => {

    try 
    {
        const id = req.params.id;
        const {nombre, ...data} = req.body; // spread y destructuring


        const usuarioDB = await Usuario.findOne({ email: data.usuario.email});
        if(!usuarioDB){ return res.status(404).json({mjs: "El usuario no existe"})};

        data.usuario = usuario._id

        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new : true});

        res.status(201).json(tipoEquipo);
    } catch (error) {

        console.log(error)
        res.status(500).json({msj: error})
    }
};


module.exports = { getAll, getTipoUsuarioActivo, getTiposById, createTipo, UpdateTipoById };
