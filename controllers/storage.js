const { matchedData } = require('express-validator')
const {storageModel} = require('../models/index')
const { handleHttpError } = require('../utils/handleError')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`; 

const fs = require('fs');
//****************************  */
const getItems = async (req,res) =>{
   
    try {
        const data = await storageModel.find({})         
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
}


//**************************** */
const getItem = async (req,res) =>{
    try {
        const {id} = matchedData(req);

        const data = await storageModel.findById(id)         
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_DETAILS_ITEMS")
    }
}


//**************************** */
const createItem = async (req,res) =>{
 try {
    const { file} = req 
    
    // subida data a mongo imagen
    const fileData = {
        filename : file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }

    const data = await storageModel.create(fileData)  
    res.send({data})
 } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM")
 }
}


//**************************** */
const updateItem = async(req,res) =>{

}

const deleteItem = async(req,res) =>{
    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id)  ;

        await storageModel.deleteMany({_id:id});    // Elimina de mongo
        
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath) // Elimina el archivo en /storage    
        
        const data ={ 
            filePath, 
            deleted:"Correctly"
         }
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}


module.exports = {getItems, getItem, createItem, updateItem, deleteItem}