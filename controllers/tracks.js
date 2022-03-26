const { matchedData } = require('express-validator')
const {tracksModel} = require('../models/index')
const { handleHttpError } = require('../utils/handleError')


//************* GET ALL */
const getItems = async (req,res) =>{
    /* tracksModel.find({}).then((res) =>{
         console.log(res);
     }) */   //mongo traer todo

   try {
    const data = await tracksModel.find({})         // Funcion get all data de Mongo
    res.send({data})
   } catch (e) {
       handleHttpError(res,"ERROR_GET_ITEMS")
   }
}


//****************GET ITEM */
const getItem = async (req,res) =>{
    
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id) ;       // Funcion get ID data de Mongo
        res.send({data})
    } catch (e) {
        handleHttpError(res,"ERROR_GET_ITEM")
    }

}

//********** CREATE */
const createItem = async (req,res) =>{
 
    try {

    const body = matchedData(req)       // funcion de express validator que limpia el body segun las validaciones cumplidas
    const data = await tracksModel.create(body)              // Funcion Post mongo
    res.send({data})
    } catch (e) {
        handleHttpError (res, "ERROR_CREATE_ITEMS")
    }

  
    

}

const updateItem = () =>{

}

const deleteItem = () =>{

}


module.exports = {getItems, getItem, createItem, updateItem, deleteItem}