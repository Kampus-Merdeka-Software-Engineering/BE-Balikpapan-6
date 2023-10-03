const userService = require('./userService');
const customerService = require('./customerService');
const productService = require('./productService');
const orderService = require('./orderService');
const orderItemService = require('./orderItemService');
const invoiceService = require('./invoiceService');
const shipmentService = require('./shipmentService');

module.exports = {
    userService,
    customerService,
    productService,
    orderService,
    orderItemService,
    invoiceService,
    shipmentService
};
