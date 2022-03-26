const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type: String  
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true,  // crea la date  en creation y update log  
        versionKey: false
    }
)

module.exports = mongoose.model("storage", StorageScheme); // users es la tabla