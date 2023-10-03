const { paymentMethodService } = require('../services');

async function getPaymentMethodByCustomerId (req, res) {
    const { customerId } = req.params;
    try {
        const paymentMethod = await paymentMethodService.getPaymentMethodByCustomerId(customerId);
        if (!paymentMethod) {
            return res.status(404).json({ error: 'Payment Method not found' });
        }
        res.status(200).json({
            message: "Successfully fetched payment method",
            data: paymentMethod
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createPaymentMethod (req, res) {
    try {
        const paymentMethod = await paymentMethodService.createPaymentMethod(req.body);
        res.status(201).json({ paymentMethod });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new payment method' });
    }
}

module.exports = {
    getPaymentMethodByCustomerId,
    createPaymentMethod
};