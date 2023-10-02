const { prisma } = require('../config/prisma.js');

async function getProducts() {
    try {
        const product = await prisma.product.findMany()
        return product
    } catch (error) {
        throw new Error(error)
    }
}

async function getProductById(productId) {
    try {
        const product = await prisma.product.findUnique({
            where: {
                product_id: Number(productId)
            }
        })
        return product
    } catch (error) {
        throw new Error(error)
    }
}

async function getProductsByCategory(category) {
    try {
        const product = await prisma.product.findMany({
            where: {
                category: category
            }
        });
        return product;
    } catch (error) {
        console.log(error);
    }
}

async function updateProductQty(productId, qty) {
    try {
        const productQtyUpdate = await prisma.product.update({
            where: {
                product_id: productId
            },
            data: {
                qty: qty,
            }
        });
        return productQtyUpdate;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory,
    updateProductQty
};