const express = require('express');
const { customerController } = require('../controllers');
const customerRoutes = express.Router();

const API = '/customer';

customerRoutes.post(API + '/createCustomer', customerController.createCustomer);
customerRoutes.get(API + '/getCustomerById/:customerId', customerController.getCustomerById);
customerRoutes.get(API + '/getCustomerByUserId/:userId', customerController.getCustomerByUserId);
customerRoutes.post(API + '/update', customerController.updateNewCustInd);

module.exports = customerRoutes;