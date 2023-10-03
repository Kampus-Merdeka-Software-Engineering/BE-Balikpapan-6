const { orderService } = require('../services');

async function getOrderByCustomerId (req, res) {
    const { custId } = req.params;
    try {
        const order = await orderService.getOrderByCustomerId(custId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json({
            message: "Successfully fetched order",
            data: order
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createOrder (req, res) {
    try {
        const orderId = await orderService.createOrder(req.body.customer_id);
        res.status(201).json({ orderId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new order' });
    }
}

async function orderComplete (req, res) {
    const orderId = req.body.order_id;
    try {
        await orderService.orderComplete(orderId);
        res.status(200).json({
            message: "Successfully complete order",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to complete order' });
    }
}

module.exports = {
    getOrderByCustomerId,
    createOrder,
    orderComplete
};