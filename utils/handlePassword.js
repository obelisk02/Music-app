const bcrypt = require('bcryptjs');

const encrypt = async (passwordPlain) =>{
    const hash = await bcrypt.hash(passwordPlain, 10);
    return hash
}


/**
 * Pasar contrasena plana y pass encriptada
 * @param {*} paswordPlain 
 * @param {*} hashPassword
 */
const compare = async (passwordPlain, hashPassword) =>{
    return await bcrypt.compare(passwordPlain, hashPassword);
}


module.exports = {encrypt, compare}