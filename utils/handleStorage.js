const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const pathStorage = `${__dirname}/../storage` ;
        cb(null, pathStorage);

    },
    filename: function(req,file,cb){
        const extension = file.originalname.split(".").pop();  // saca la extension
        const filename = `file-${Date.now()}.${extension}`;
        cb(null, filename);


    }
})


// MIDLEWARE multer 
const uploadMiddleWare = multer({
    storage:storage
})


module.exports = uploadMiddleWare