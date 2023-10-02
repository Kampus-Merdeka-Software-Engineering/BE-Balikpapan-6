const { prisma } = require('../config/prisma.js');

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

async function createUser(user) {
    try {
        const createdUser = await prisma.user.create({
            data: {
                name: user.name,
                username: user.username,
                birthdate: user.birthdate,
                email: user.email,
                password: user.password,
            }
        })
        return createdUser;
    } catch (error) {
        throw new Error(error)
    }
}

async function updateUserById(userId, updatedUser) {
    try {
        const userUpdate = await prisma.user.update({
            where: {
                user_id: Number(userId)
            },
            data: {
                name: updatedUser.name,
                birthdate: updatedUser.birthdate,
                email: updatedUser.email,
                username: updatedUser.username,
                password: updatedUser.password,
            }
        })
        return userUpdate;
    } catch (error) {
        throw new Error(error)
    }
}

async function login(email, password) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                password: password
            }, select: {
                user_id: true,
                email: true,
                username: true,
                name: true,
            },
        })
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    login
};