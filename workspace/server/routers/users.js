const express = require('express');
const userRouter = express.Router();
const { getUsers, getOneUser } = require('../controllers/userController');


userRouter.get('/users', getUsers)

userRouter.get('/users/:id', getOneUser)

module.exports = userRouter;