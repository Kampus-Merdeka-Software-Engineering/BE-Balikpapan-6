const express = require('express');
const { shipmentController } = require('../controllers');
const shipmentRoutes = express.Router();

const API = '/shipment';

shipmentRoutes.get(API + '/getShipmentByInvoiceId/:invoiceId', shipmentController.getShipmentByInvoiceId);
shipmentRoutes.post(API + '/createShipment', shipmentController.createShipment);

module.exports = shipmentRoutes;