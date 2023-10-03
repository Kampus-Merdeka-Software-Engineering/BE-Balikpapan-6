const express = require('express');
const { orderController } = require('../controllers');
const orderRoutes = express.Router();

const API = '/order';

orderRoutes.get(API + '/getOrderbyCustomerId/:custId', orderController.getOrderByCustomerId);
orderRoutes.post(API + '/createOrder', orderController.createOrder);
orderRoutes.put(API +'/orderComplete', orderController.orderComplete);

module.exports = orderRoutes;