const { orderService } = require('../services');
const { orderItemService } = require('../services');
const { productService } = require('../services');

async function getOrderItemById (req, res) {
    try {
        const orderItem = await orderItemService.getOrderItemById(req.params.orderItemId);

        res.status(200).json({
            message: "Successfully fetched order",
            data: orderItem
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getOrderItemsByOrderId (req, res) {
    try {
        const orderItem = await orderItemService.getOrderItemsByOrderId(req.params.orderId);

        res.status(200).json({
            message: "Successfully fetched order",
            data: orderItem
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createOrderItem(req, res) {
    try {
        let order = await orderService.getOrderByCustomerId(req.body.customer_id);
        if (!order || order.length === 0) {
            order = await orderService.createOrder(req.body.customer_id);
        }

        req.body.order_id = order.order_id;

        const orderItem = await orderItemService.createOrderItem(req.body);
        const product = await productService.getProductById(req.body.product_id);

        let qty = product.qty;
        let orderedQty = req.body.order_qty;
        let restQty = qty - orderedQty;

        if (restQty < 0) {
            res.status(400).json({ 
                message: "Product out of stock" 
            });
        } else {
            await productService.updateProductQty(product.product_id, restQty)
        }

        res.status(201).json({ orderItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new order' });
    }
}

async function deleteOrderItem (req, res) {
    const orderItemId = req.body.order_item_id;
    try {
        const orderItem = await orderItemService.getOrderItemById(orderItemId);
        const product = await productService.getProductById(orderItem[0].product_id);
        await orderItemService.deleteOrderItem(orderItemId);

        let qty = product.qty;
        let orderedQty = orderItem[0].order_qty;
        let restQty = qty + orderedQty;

        await productService.updateProductQty(product.product_id, restQty)

        res.status(200).json({
            message: "Successfully delete order item",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete order item' });
    }
}

module.exports = {
    getOrderItemById,
    getOrderItemsByOrderId,
    createOrderItem,
    deleteOrderItem
};