const { prisma } = require('../config/prisma.js');

async function createCustomer(data) {
    try {
        const createdCustomer = await prisma.customer.create({
            data: {
                user_id: data.user_id,
                new_cust_ind: 'Y'
            }
        })
        return createdCustomer;
    } catch (error) {
        throw new Error(error)
    }
}

async function getCustomerById(customerId) {
    try {
        const customer = await prisma.customer.findUnique({
            where: {
                customer_id: Number(customerId)
            }
        })
        return customer
    } catch (error) {
        throw new Error(error)
    }
}

async function updateNewCustInd(customerId) {
    try {
        const customerUpdate = await prisma.customer.update({
            where: {
                customer_id: Number(customerId)
            },
            data: {
                new_cust_ind: 'N',
            }
        })
        return customerUpdate;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getCustomerById,
    createCustomer,
    updateNewCustInd
};
