const userRoutes = require('./userRoute');
const customerRoutes = require('./customerRoute');
const productRoutes = require('./productRoute');
const orderRoutes = require('./orderRoute');
const orderItemRoutes = require('./orderItemRoute');

module.exports = [
    userRoutes,
    customerRoutes,
    productRoutes,
    orderRoutes,
    orderItemRoutes
];