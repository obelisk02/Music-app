
const {matchedData} = require ('express-validator')

const {encrypt, compare} = require('../utils/handlePassword');

const { tokenSign } = require('../utils/handleJWT');

const usersModel = require('../models/NoSQL/users');

const loginController = async (req,res) =>{
    try {
        req= matchedData(req);
    const passwordHashed = await encrypt(req.password);
    const body = {...req, password: passwordHashed}

    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, {strict: false});

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }
    res.send({data: data})
    } catch (error) {
        console.log(error);
    }
}


module.exports = {loginController}