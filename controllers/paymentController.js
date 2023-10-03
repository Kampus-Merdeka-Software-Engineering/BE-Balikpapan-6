const { paymentService } = require('../services');

async function getPaymentByInvoiceId (req, res) {
    const { invoiceId } = req.params;
    try {
        const payment = await paymentService.getPaymentByInvoiceId(invoiceId);
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        res.status(200).json({
            message: "Successfully fetched payment",
            data: payment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createPayment (req, res) {
    try {
        const payment = await paymentService.createPayment(req.body);
        res.status(201).json({ payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new payment' });
    }
}

module.exports = {
    getPaymentByInvoiceId,
    createPayment
};