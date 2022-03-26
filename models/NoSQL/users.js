const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name:{
            type: String  
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: ["user","admin"],
            default: "user",
        }
    },
    {
        timestamps: true,  // crea la date  en creation y update log  
        versionKey: false
    }
)

module.exports = mongoose.model("users", UserScheme); // users es la tabla