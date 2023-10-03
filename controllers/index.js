const userController = require('./userController');
const customerController = require('./customerController');
const productController = require('./productController');
const orderController = require('./orderController');
const orderItemController = require('./orderItemController');
const invoiceController = require('./invoiceController');
const shipmentController = require('./shipmentController');
const paymentController = require('./paymentController');

module.exports = {
    userController,
    customerController,
    productController,
    orderController,
    orderItemController,
    invoiceController,
    shipmentController,
    paymentController
};