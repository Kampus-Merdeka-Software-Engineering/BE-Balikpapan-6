const { prisma } = require('../config/prisma.js');

async function getInvoiceByOrderId (orderId) {
    try {
        const invoice = await prisma.invoice.findMany({
            where: {
                order_id: Number(orderId),
            }
        })
        return invoice
    } catch (error) {
        throw new Error(error)
    }
}

async function createInvoice (orderId) {
    try {
        const createdInvoice = await prisma.invoice.create({
            data: {
                order_id: orderId,
                invoice_status: 'UNPAID',
            }
        })
        return createdInvoice;
    } catch (error) {
        throw new Error(error)
    }
}

async function paidInvoice(invoiceId) {
    try {
        const invoice = await prisma.invoice.update({
            where: {
                invoice_id: invoiceId
            },
            data: {
                invoice_status: 'PAID'
            }
        });
        return invoice;
    } catch (error) {
        throw new Error(error)
    }
}

async function cancelInvoice(invoiceId) {
    try {
        const invoice = await prisma.invoice.update({
            where: {
                invoice_id: invoiceId
            },
            data: {
                invoice_status: 'CANCELED'
            }
        });
        return invoice;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getInvoiceByOrderId,
    createInvoice,
    paidInvoice,
    cancelInvoice
};