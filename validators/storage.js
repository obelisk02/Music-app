const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');


const validatorGetItem = [
   
    check ("id")
    .exists()
    .notEmpty()
    .isMongoId(),

    // trabaja con handdle validator en /Utils
   
    (req,res,next) => {
       return validateResults(req,res,next)
    }
];

module.exports = {validatorGetItem}