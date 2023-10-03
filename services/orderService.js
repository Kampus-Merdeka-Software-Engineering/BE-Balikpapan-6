const { prisma } = require('../config/prisma.js');

async function getOrderByCustomerId (custId) {
    try {
        const order = await prisma.order.findMany({
            where: {
                customer_id: Number(custId),
                order_complete_ind: 'N'
            }
        })
        return order
    } catch (error) {
        throw new Error(error)
    }
}

async function createOrder(customer_id) {
    try {
        const createdOrder = await prisma.order.create({
            data: {
                customer_id: customer_id,
                order_complete_ind: 'N',
            }
        })
        return createdOrder;
    } catch (error) {
        throw new Error(error)
    }
}

async function orderComplete(orderId) {
    try {
        const order = await prisma.order.update({
            where: {
                order_id: orderId
            },
            data: {
                order_complete_ind: 'Y'
            }
        });
        return order;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getOrderByCustomerId,
    createOrder,
    orderComplete
};