const express = require('express');
const { createItem, getItems, getItem, deleteItem } = require('../controllers/storage');
const router = express.Router();

const uploadMiddleWare = require('../utils/handleStorage')

const {validatorGetItem} = require ('../validators/storage')

router.post("/", uploadMiddleWare.single('myfile') ,createItem);

/**
 * Get All
 */
router.get("/", getItems);

router.get("/:id", validatorGetItem, getItem);

router.delete("/:id", validatorGetItem, deleteItem)


module.exports = router;