const express = require('express');
const { invoiceController } = require('../controllers');
const invoiceRoutes = express.Router();

const API = '/invoice';

invoiceRoutes.get(API + '/getInvoiceByOrderId/:orderId', invoiceController.getInvoiceByOrderId);
invoiceRoutes.post(API + '/createInvoice', invoiceController.createInvoice);
invoiceRoutes.put(API +'/paidInvoice', invoiceController.paidInvoice);
invoiceRoutes.put(API +'/cancelInvoice', invoiceController.cancelInvoice);

module.exports = invoiceRoutes;