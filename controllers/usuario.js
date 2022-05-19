const { Usuario } = require('../models/usuario');
const { request, response } = require('express');


const getUsers = async( request, response) => {

    const query = {};
    const usuariosBD = await Usuario.find(query);

    response.json(usuariosBD);
};

module.exports = { getUsers }