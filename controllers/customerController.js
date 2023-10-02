const { customerService } = require('../services');

async function createCustomer(req, res) {
    try {
        const customerId = await customerService.createCustomer(req.body);
        res.status(201).json({ customerId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new customer' });
    }
}

async function getCustomerById(req, res) {
    const { customerId } = req.params;
    try {
        const customer = await customerService.getCustomerById(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json({
            message: "Successfully fetched customer",
            data: customer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateNewCustInd(req, res) {
    const customerId = req.body.customer_id;
    try {
        await customerService.updateNewCustInd(customerId);
        res.status(200).json({
            message: "Successfully update customer\'s indicator",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update customer\'s indicator' });
    }
}

module.exports = {
    createCustomer,
    getCustomerById,
    updateNewCustInd
}