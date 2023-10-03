const express = require('express');
const { paymentMethodController } = require('../controllers');
const paymentMethodRoutes = express.Router();

const API = '/paymentMethod';

paymentMethodRoutes.get(API + '/getPaymentMethodByCustomerId/:customerId', paymentMethodController.getPaymentMethodByCustomerId);
paymentMethodRoutes.post(API + '/createPaymentMethod', paymentMethodController.createPaymentMethod);

module.exports = paymentMethodRoutes;