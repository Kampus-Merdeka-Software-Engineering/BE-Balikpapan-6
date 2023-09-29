const {prisma} = require('../config/prisma.js');

async function getUsers() {
    try {
        const user = await prisma.user.findMany();
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function getUserById(userId) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                user_id: Number(userId)
            }
        })
        return user
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getUserById,
    getUsers
};