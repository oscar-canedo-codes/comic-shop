// IMPORTS
const express = require("express");
const { isAuth } = require('../../middlewares/auth.middleware');
const { register, login, logout } = require('../controllers/users.controllers');

//EXPRESS ENDPOINTS
const userRoutes = express.Router();

userRoutes.post('/register', register);
userRoutes.post('/login', login);
userRoutes.post('/logout', [isAuth], logout);

module.exports = userRoutes;