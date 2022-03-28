const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const tokenSign = async (user) =>{
    const sign = jsonwebtoken.sign({
        _id: user._id,
        role: user.role
    },
     JWT_SECRET,
    {
        expiresIn: 60 * 2
    }
    );

    return sign
}

/**
 * Pasar el jwt de la session
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) =>{
    try {
        return jsonwebtoken.verify(tokenJwt , JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = {tokenSign,verifyToken}