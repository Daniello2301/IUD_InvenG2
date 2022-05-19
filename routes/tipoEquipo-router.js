const router = require('express').Router();

const {getAll, getTipoUsuarioActivo, getTiposById, createTipo} = require('../controllers/tipoEquipo-controller');

router.get('/', getAll);

router.get('/usuario-activo', getTipoUsuarioActivo);

router.get('/:id', getTiposById);

router.post('/', createTipo);