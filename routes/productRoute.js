const express = require('express');
const { productController } = require('../controllers');
const productRoutes = express.Router();

const API = '/product';

productRoutes.get(API + '/getProducts', productController.getProducts);
productRoutes.get(API + '/getProductById/:productId', productController.getProductById);
productRoutes.get(API + '/getProductsByCategory/:category', productController.getProductsByCategory);
productRoutes.get(API + '/getProductsByName/:name', productController.getProductsByName);
productRoutes.put(API + '/updateProductQty', productController.updateProductQty);

module.exports = productRoutes;