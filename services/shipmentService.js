const { prisma } = require('../config/prisma.js');

async function createShipment(data) {
    try {
        const createdShipment = await prisma.shipment.create({
            data: {
                invoice_id: data.invoice_id,
                address: data.address,
                city: data.city,
                province: data.province
            }
        })
        return createdShipment;
    } catch (error) {
        throw new Error(error)
    }
}

async function getShipmentByInvoiceId(invoiceId) {
    try {
        const shipment = await prisma.shipment.findMany({
            where: {
                invoice_id: Number(invoiceId)
            }
        })
        return shipment
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createShipment,
    getShipmentByInvoiceId,
};