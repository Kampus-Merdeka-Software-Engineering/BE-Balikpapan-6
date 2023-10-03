const express = require('express');
const { orderItemController } = require('../controllers');
const orderItemRoutes = express.Router();

const API = '/orderItem';

orderItemRoutes.get(API + '/getOrderItemById/:orderItemId', orderItemController.getOrderItemById);
orderItemRoutes.get(API + '/getOrderItemsByOrderId/:orderId', orderItemController.getOrderItemsByOrderId);
orderItemRoutes.post(API + '/createOrderItem', orderItemController.createOrderItem);
orderItemRoutes.put(API +'/deleteOrderItem', orderItemController.deleteOrderItem);

module.exports = orderItemRoutes;