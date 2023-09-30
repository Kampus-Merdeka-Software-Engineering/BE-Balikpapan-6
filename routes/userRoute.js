const express = require('express');
const { userController } = require('../controllers');
const userRoutes = express.Router();

userRoutes.get('/users', userController.getUsers);
userRoutes.post('/user/create', userController.createUser);
userRoutes.get('/user/:userId', userController.getUserById);
userRoutes.put('/user/update', userController.updateUserById);

module.exports = {
    userRoutes
}