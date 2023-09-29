const express = require('express');
const {userController} = require('../controllers');
const router = express.Router();

router.get('/user', userController.getUser);