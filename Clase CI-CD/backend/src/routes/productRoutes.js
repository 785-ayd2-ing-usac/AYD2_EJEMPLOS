const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para obtener todos los productos
router.get('/products1', productController.getProducts);

// Ruta para obtener todos los productos
router.get('/products2', productController.getProducts2);

// Ruta para obtener un producto por ID
router.get('/products/:id', productController.getProduct);

module.exports = router;
