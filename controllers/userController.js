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
        res.status(500).json({error: 'Internal server error'});
    }
}

async function getUserById(req, res) {
    const {userId} = req.params;
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

module.exports = {
    getUserById,
    getUsers
};