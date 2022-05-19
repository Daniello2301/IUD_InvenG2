const {Router} = require('express');
const Marca = require('../models/marca')

const router = Router();


router.get('/', async ( req, res )=>{

    try 
    {    
        const response = await Marca.find();
        console.log("GET/marcas")
        res.status(2001).send(response);

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

router.post('/', async ( req, res ) => {
    try 
    {
        const {nombre, estado} = req.body;
        
    } catch (error) {    
        console.log(error);
        res.status(500).send(error.message);
    }
});