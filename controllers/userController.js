const { userService } = require('../services');

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.status(200).json({
            message: "Successfully fetched all users",
            data: users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getUserById(req, res) {
    const { userId } = req.params;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({
            message: "Successfully fetched user",
            data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createUser(req, res) {
    try {
        const userId = await userService.createUser(req.body);
        res.status(201).json({ userId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateUserById(req, res) {
    const { userId } = req.params;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (req.body.username && req.body.username !== user.username) {
            user.username = req.body.username;
        }

        if (req.body.email && req.body.email !== user.email) {
            user.email = req.body.email;
        }

        if (req.body.password && req.body.password !== user.password) {
            user.password = req.body.password;
        }

        await userService.updateUserById(userId, user);
        res.status(200).json({
            message: "Successfully update user",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById
};