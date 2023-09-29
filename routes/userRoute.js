const express = require('express');
const {userController} = require('../controllers');
const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers);
userRoutes.get('/users', userController.getUsers);
userRoutes.get('/user/:userId', userController.getUserById);

module.exports = {
    userRoutes
}