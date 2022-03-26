const {validationResult} = require('express-validator')

const validateResults = (req,res,next) =>{
    try{
        validationResult(req).throw();
        return next();  // Si no existe error esto hace que continue de este punto hacia el controlador
    } catch (err){
        res.status(403);
        res.send({ errors: err.array() });
    }
}

module.exports = validateResults