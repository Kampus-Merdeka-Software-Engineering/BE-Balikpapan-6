const { prisma } = require('../config/prisma.js');

async function createPaymentMethod(data) {
    try {
        const paymentMethod = await prisma.payment_method.findMany({
            where: {
                customer_id: data.customer_id
            }
        })

        let retPaymentMethod;

        if (!paymentMethod || paymentMethod.length === 0) {
            retPaymentMethod = await prisma.payment_method.create({
                data: {
                    customer_id: data.customer_id,
                    card_no: data.card_no,
                    card_holder: data.card_holder,
                    expiration_month: data.expiration_month,
                    expiration_year: data.expiration_year,
                    cvv: data.cvv
                }
            })
        } else {
            if (data.card_no && data.card_no !== paymentMethod.card_no) {
                paymentMethod.card_no = data.card_no;
            }
    
            if (data.card_holder && data.card_holder !== paymentMethod.card_holder) {
                paymentMethod.card_holder = data.card_holder;
            }
    
            if (data.expiration_month && data.expiration_month !== paymentMethod.expiration_month) {
                paymentMethod.expiration_month = data.expiration_month;
            }
    
            if (data.expiration_year && data.expiration_year !== paymentMethod.expiration_year) {
                paymentMethod.expiration_year = data.expiration_year;
            }

            if (data.cvv && data.cvv !== paymentMethod.cvv) {
                paymentMethod.cvv = data.cvv;
            }
            paymentMethod.customer_id = data.customer_id;
            
            retPaymentMethod = await prisma.payment_method.update({
                where: {
                    payment_method_id: paymentMethod.payment_method_id
                },
                data: {
                    card_no: paymentMethod.card_no,
                    customer_id: paymentMethod.customer_id,
                    card_holder: paymentMethod.card_holder,
                    expiration_month: paymentMethod.expiration_month,
                    expiration_year: paymentMethod.expiration_year,
                    cvv: paymentMethod.cvv
                }
            })
        }
        return retPaymentMethod;
    } catch (error) {
        throw new Error(error)
    }
}

async function getPaymentMethodByCustomerId(customerId) {
    try {
        const paymenMethod = await prisma.payment_method.findMany({
            where: {
                customer_id: Number(customerId)
            }
        })
        return paymenMethod
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createPaymentMethod,
    getPaymentMethodByCustomerId,
};