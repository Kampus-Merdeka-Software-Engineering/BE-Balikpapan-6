const { prisma } = require('../config/prisma.js');

async function createPayment(data) {
    try {
        const createdPayment = await prisma.payment.create({
            data: {
                invoice_id: data.invoice_id,
                payment_amount: data.payment_amount
            }
        })
        return createdPayment;
    } catch (error) {
        throw new Error(error)
    }
}

async function getPaymentByInvoiceId(invoiceId) {
    try {
        const payment = await prisma.payment.findMany({
            where: {
                invoice_id: Number(invoiceId)
            }
        })
        return payment
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createPayment,
    getPaymentByInvoiceId,
};