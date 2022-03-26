const expres = require ('express')
const router = expres.Router()

const fs = require("fs")

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) =>{
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file);

    if (name !== 'index'){
        console.log(`Cargando ruta : ${name}`);
        router.use(`/${name}`, require(`./${name}`))
    }
})


module.exports = router