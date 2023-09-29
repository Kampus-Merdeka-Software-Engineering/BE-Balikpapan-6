const {prisma} = require ('../config');

async function getUser() {
    try {
        const userRes = await prisma.user.findMany()
        return userRes;
    } catch (error) {
        console.error(error);
        throw new Error()
    }
}   

module.exports = {
    getUser
};