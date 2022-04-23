const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/session')
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')
const {validatorCreateItem, validatorGetItem, } = require('../validators/tracks');
const checkRole = require('../middlewares/role');


router.get('/', authMiddleware,  getItems)

router.get('/:id', validatorGetItem , authMiddleware, getItem)

router.post('/', validatorCreateItem, authMiddleware, checkRole(["admin"]), createItem)

router.put('/:id', validatorGetItem , validatorCreateItem, authMiddleware, updateItem)

router.delete('/:id', validatorGetItem , authMiddleware, deleteItem)


module.exports = router;