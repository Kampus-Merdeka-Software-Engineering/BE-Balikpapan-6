const userRoutes = require('./userRoute');
const customerRoutes = require('./customerRoute');
const productRoutes = require('./productRoute');
const orderRoutes = require('./orderRoute');
const orderItemRoutes = require('./orderItemRoute');
const invoiceRoutes = require('./invoiceRoute');
const shipmentRoutes = require('./shipmentRoute');
const paymentRoutes = require('./paymentRoute');
const paymentMethodRoutes = require('./paymentMethodRoute');

module.exports = [
    userRoutes,
    customerRoutes,
    productRoutes,
    orderRoutes,
    orderItemRoutes,
    invoiceRoutes,
    shipmentRoutes,
    paymentRoutes,
    paymentMethodRoutes
];