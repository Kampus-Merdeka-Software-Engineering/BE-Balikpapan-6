const { invoiceService } = require('../services');
const { orderService } = require('../services');

async function getInvoiceByOrderId (req, res) {
    const orderId = req.params.orderId;
    try {
        const invoice = await invoiceService.getInvoiceByOrderId(orderId);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json({
            message: "Successfully fetched invoice",
            data: invoice
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createInvoice (req, res) {
    try {
        const checkInvoice = await invoiceService.getInvoiceByOrderId(req.body.order_id);

        if (!checkInvoice || checkInvoice.length === 0) {
            const invoice = await invoiceService.createInvoice(req.body.order_id);
            res.status(200).json({ invoice });
        } else {
            res.status(200).json({ checkInvoice });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create new invoice' });
    }
}

async function paidInvoice (req, res) {
    const invoiceId = req.body.invoice_id;
    try {
        const invoice = await invoiceService.paidInvoice(invoiceId);
        res.status(200).json({
            message: "Successfully paid invoice",
        });

        await orderService.orderComplete(invoice.order_id);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to paid invoice' });
    }
}

async function cancelInvoice (req, res) {
    const invoiceId = req.body.invoice_id;
    try {
        await invoiceService.cancelInvoice(invoiceId);
        res.status(200).json({
            message: "Successfully cancel invoice",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to cancel invoice' });
    }
}

module.exports = {
    getInvoiceByOrderId,
    createInvoice,
    paidInvoice,
    cancelInvoice
};