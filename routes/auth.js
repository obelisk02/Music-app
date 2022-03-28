const express = require ('express');
const { loginController } = require('../controllers/auth');

const router = express.Router()

const {validatorRegister, validateLogin} = require('../validators/auth');




router.post('/register', validatorRegister, loginController);



module.exports = router

