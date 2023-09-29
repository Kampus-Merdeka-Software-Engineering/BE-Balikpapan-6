const {userService} = require('../services');

async function getUser (req, res) {
    const user = await userService.getUser();
    res.status(200).json(user);
}

module.exports = {
    getUser
};