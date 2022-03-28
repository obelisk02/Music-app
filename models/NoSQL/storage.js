const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

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
);

StorageScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("storage", StorageScheme); // users es la tabla