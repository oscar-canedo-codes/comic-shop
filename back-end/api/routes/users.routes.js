const express = require('express');
const passport = require('passport');
const config = require('../config');

const usersRoutes = express.Router();

//AUTHENTICATION
const { validateField } = require('../middlewares/validateFields.middleware');
const { check } = require('express-validator');
const { signIn } = require('../authentication/jsonwebtoken');
const { isAuthenticated } = require('../../middlewares/auth.middleware');


// REGISTER - EMAIL VALIDATION
usersRoutes.post('/register',[
    check('email', 'Email is not vaid').isEmail(), 
  validateField,
],
 (req, res, next) => {

    const callback = (error, user) => {
        if (error) {
            console.log('Error registering', error);
            return next(error);
        }
        req.logIn(user, (errorLogin => {
            if (errorLogin) {
              next(errorLogin);
            }
          }));
          res.status(201).json(user);
        }

    passport.authenticate('register', callback)(req);

});


// LOGIN - GENERATE JWT FOR ACCESS
usersRoutes.post('/login', [isAuthenticated], (req, res, next) => {
    const callback = (error, user) => {
    if (error) {
        console.log("Error logging in", error);
        return next(error);
        }

     const token = signIn(user, config.JWT_SECRET);
    return res.status(200).json({ user: user, token });
        }
      
    passport.authenticate('login', callback)(req);
});

//LOGOUT - END SESSION
usersRoutes.post('/logout', [isAuthenticated], (req, res, next) => {

    if (!req.user) {
     return res.sendStatus(304);
    }

    return res.status(200).json('Closed user session');
});

module.exports = usersRoutes;