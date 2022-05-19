const { Router } = require('express');
const { getUsers } = require('../controllers/usuario')

const router = Router();

router.get("/", getUsers);
router.post('/', ()=> {
    
});
router.put('/');

module.exports = router;