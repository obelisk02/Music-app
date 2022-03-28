require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app= express();

app.use(cors())
app.use(express.json())     // reciba post
app.use(express.static("storage"))  // hacer publica la carpeta storage imagenes

const dbConnect = require ('./config/mongo')

const port = process.env.Port || 3000 ;

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
});

dbConnect();



// ROUTES
app.use("/api", require('./routes'))  // esta llamando la raiz el archivo index.js