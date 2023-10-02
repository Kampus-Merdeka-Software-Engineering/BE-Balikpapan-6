const express = require('express');
const { customerController } = require('../controllers');
const customerRoutes = express.Router();

const API = '/customer';

customerRoutes.get(API + '/:customerId', customerController.getCustomerById);
customerRoutes.post(API + '/update', customerController.updateNewCustInd);

module.exports = customerRoutes;