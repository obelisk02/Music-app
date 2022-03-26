const express = require('express');
const { createItem } = require('../controllers/storage');
const router = express.Router();

const uploadMiddleWare = require('../utils/handleStorage')

router.post("/", uploadMiddleWare.single('myfile') ,createItem);



module.exports = router;