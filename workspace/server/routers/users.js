const express = require('express');

const userRouter = express.Router();
const { getUsers, getOneUser, createUser } = require('../controllers/userController.js');

userRouter.get('/', getUsers);

userRouter.get('/:id', getOneUser);

userRouter.post('/', createUser);

module.exports = userRouter;
