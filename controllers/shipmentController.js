const { shipmentService } = require('../services');

async function getShipmentByInvoiceId (req, res) {
    const { invoiceId } = req.params;
    try {
        const shipment = await shipmentService.getShipmentByInvoiceId(invoiceId);
        if (!shipment) {
            return res.status(404).json({ error: 'Shipment not found' });
        }
        res.status(200).json({
            message: "Successfully fetched shipment",
            data: shipment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createShipment (req, res) {
    try {
        const shipment = await shipmentService.createShipment(req.body);
        res.status(201).json({ shipment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new shipment' });
    }
}

module.exports = {
    getShipmentByInvoiceId,
    createShipment
};