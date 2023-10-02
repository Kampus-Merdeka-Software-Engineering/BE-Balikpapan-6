const express = require('express');
const { userController } = require('../controllers');
const userRoutes = express.Router();

const API = '/user';

userRoutes.get(API + '/getAllUser', userController.getUsers);
userRoutes.post(API + '/create', userController.createUser);
userRoutes.get(API + '/:userId', userController.getUserById);
userRoutes.put(API +'/update', userController.updateUserById);

module.exports = userRoutes;