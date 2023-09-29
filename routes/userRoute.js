const express = require('express');
const { userController } = require('../controllers');
const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers);
userRoutes.get('/users', userController.getUsers);
userRoutes.post('/users/create', userController.createUser);
userRoutes.get('/user/:userId', userController.getUserById);
userRoutes.put('/user/update/:userId', userController.updateUserById);

module.exports = {
    userRoutes
}