const routerInventario = require('express').Router();

const Inventario = require('../models/inventario');



routerInventario.get('/', async (req, res) => {
    try 
    {    
        const response = await Inventario.find();
        console.log("GET/marcas")
        res.status(2001).send(response);

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});




routerInventario.post('/', async (req, res) => {

    try {

        const {serial, modelo, descripcion, foto, 
                precio, usuario, marca, tipoEquipo, estadoEquipo, fechaCompra} = req.body

        let inventario = await Inventario.find({serial: serial});
        if(inventario){
            return res.status(400).send("The Serial is already exist");
        }

        inventario = new Inventario();
        inventario.serial = serial;
        inventario.modelo = modelo;
        inventario.descripcion = descripcion;
        inventario.foto = foto;
        inventario.precio = precio;
        inventario.usuario = usuario._id;
        inventario.tipoEquipo = tipoEquipo._id;
        inventario.estadoEquipo = estadoEquipo._id;
        inventario.marca = marca._id;
        inventario.fechaCompra = fechaCompra;

        inventario = await inventario.save();


        res.status(201).send(inventario);
    } catch (error) {
       console.log(error);
       res.status(500).send(error.message); 
    }
});


routerInventario.put('/:id', async (req, res) => {

    try {
        //Find inventory to update
        let inventario = await Inventario.findById(req.params.id);
        if(!inventario){
            return res.status(404).send("Not Found Inventory");
        }

        const {serial, modelo, descripcion, foto, 
                precio, usuario, marca, tipoEquipo, estadoEquipo, fechaCompra} = req.body

        //Find by serial but distint inventory is updating
        const inventarioExiste = await Inventario.findOne({serial: serial, _id: { $ne: id }});
        if(inventarioExiste){
            return res.status(400).send("The Serial is already exist");
        }


        //set inventory to set
        inventario.serial = serial;
        inventario.modelo = modelo;
        inventario.descripcion = descripcion;
        inventario.foto = foto;
        inventario.precio = precio;
        inventario.usuario = usuario._id;
        inventario.tipoEquipo = tipoEquipo._id;
        inventario.estadoEquipo = estadoEquipo._id;
        inventario.marca = marca._id;
        inventario.fechaCompra = fechaCompra;

        inventario = inventario.save();


        res.status(201).send(inventario);
    } catch (error) {
       console.log(error);
       res.status(500).send(error.message); 
    }
});

module.exports = routerInventario;