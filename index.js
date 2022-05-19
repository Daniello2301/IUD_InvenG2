// Startes express connection for ready To use
const express = require('express');
const app = express();

// Decare routes to initialize
const usuarios = require('./routes/usuario-router');
const routerInventario = require('./routes/inventario-router')

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use('api/usuarios', usuarios);
app.use('api/inventario', routerInventario )

module.exports = app;


