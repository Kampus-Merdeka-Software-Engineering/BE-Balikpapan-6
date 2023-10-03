const { prisma } = require('../config/prisma.js');

async function getOrderItemById (orderItemId) {
    try {
        const orderItem = await prisma.order_item.findMany({
            where: {
                order_item_id: Number(orderItemId),
            }
        })
        return orderItem
    } catch (error) {
        throw new Error(error)
    }
}

async function getOrderItemsByOrderId (orderId) {
    try {
        const orderItem = await prisma.order_item.findMany({
            where: {
                order_id: Number(orderId),
                defunct_ind: 'N'
            }
        })
        return orderItem
    } catch (error) {
        throw new Error(error)
    }
}

async function createOrderItem(orderItem) {
    try {
        const createdOrderItem = await prisma.order_item.create({
            data: {
                product_id: orderItem.product_id,
                order_id: orderItem.order_id,
                order_qty: orderItem.order_qty,
                defunct_ind: 'N'
            }
        })
        return createdOrderItem;
    } catch (error) {
        throw new Error(error)
    }
}

async function deleteOrderItem(orderItemId) {
    try {
        const orderItem = await prisma.order_item.update({
            where: {
                order_item_id: orderItemId
            },
            data: {
                defunct_ind: 'Y'
            }
        });
        return orderItem;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getOrderItemById,
    getOrderItemsByOrderId,
    createOrderItem,
    deleteOrderItem
};