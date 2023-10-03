const express = require('express');
const { paymentController } = require('../controllers');
const paymentRoutes = express.Router();

const API = '/payment';

paymentRoutes.get(API + '/getPaymentByInvoiceId/:invoiceId', paymentController.getPaymentByInvoiceId);
paymentRoutes.post(API + '/createPayment', paymentController.createPayment);

module.exports = paymentRoutes;