const { productService } = require('../services');

async function getProducts (req, res) {
    try {
        const products = await productService.getProducts();
        res.status(200).json({
            message: "Successfully fetched all products",
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getProductById(req, res) {
    const { productId } = req.params;
    try {
        const product = await productService.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({
            message: "Successfully fetched product",
            data: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getProductsByCategory (req, res) {
    const { category } = req.params;
    try {
        const product = await productService.getProductsByCategory(category);
        if (!product) {
            return res.status(404).json({ error: 'No Product found' });
        }
        res.status(200).json({
            message: "Successfully fetched products",
            data: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getProductsByName (req, res) {
    const { name } = req.params;
    try {
        const product = await productService.getProductsByName(name);
        if (!product) {
            return res.status(404).json({ error: 'No Product found' });
        }
        res.status(200).json({
            message: "Successfully fetched products",
            data: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateProductQty (req, res) {
    const productId = req.body.product_id;
    const qty = req.body.qty;
    try {
        await productService.updateProductQty(productId, qty);
        res.status(200).json({
            message: "Successfully update product qty",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update product\'s qty' });
    }
}

module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory,
    getProductsByName,
    updateProductQty
};