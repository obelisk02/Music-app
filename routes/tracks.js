const expres = require ('express')

const router = expres.Router()

// import de validator
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');

const customHeader = require('../Middleware/customHeader');
// imports routes
const {getItems,getItem,createItem} = require('../controllers/tracks')



// ruta /tracks

router.get('/' , getItems);

router.post('/' ,validatorCreateItem,  createItem);

router.get('/:id',validatorGetItem, getItem);


module.exports = router

