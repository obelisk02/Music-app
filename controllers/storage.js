const {storageModel} = require('../models/index')

const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req,res) =>{
    /* tracksModel.find({}).then((res) =>{
         console.log(res);
     }) */   //mongo traer todo

    const data = await storageModel.find({})         // Funcion get all data de Mongo
    res.send({data})
}

const getItem = (req,res) =>{
    const data = ["item", "1"]

    res.send({data})
}

const createItem = async (req,res) =>{
    const {body, file} = req 
    console.log(file);
    
    // subida data a mongo imagen
    const fileData = {
        filename : file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }

    const data = await storageModel.create(fileData)  
    res.send({data})
}

const updateItem = () =>{

}

const deleteItem = () =>{

}


module.exports = {getItems, getItem, createItem, updateItem, deleteItem}