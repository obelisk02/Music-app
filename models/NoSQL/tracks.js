const mongoose = require('mongoose');

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type: String  
        },
        album:{
            type: String
        },
        cover:{
            type: String,
            validate: {
                validator: (req) =>{
                return true;
            },

            message: "Error URL"
            },
        },
        artist: {
            name:{
                type:String
            },
            nickname:{
                type: String
            },
            nationality:{
                type: String
            }
        },
        duration: {
            start:{
                type:Number
            },
            end:{
                type:Number
            }
        },

        mediaId:{
            type: mongoose.Types.ObjectId
        }

    },
    {
        timestamps: true,  // crea la date  en creation y update log  
        versionKey: false
    }
)

module.exports = mongoose.model("tracks", TracksScheme); // users es la tabla