const express = require('express');
const passport = require('passport');

/* //AUTHENTICATION
const { signIn } = require('../authentication/jsonwebtoken');
const { isAuthenticated } = require('../../middlewares/auth.middleware'); */

const usersRoutes = express.Router();

// REGISTER - EMAIL VALIDATION
usersRoutes.post('/register',
 (req, res, next) => {

    const callback = (error, user) => {
        if (error) {
            console.log('Error registering user', error);
            return next(error);
        }
        req.logIn(user, (errorLogin => {
            if (errorLogin) {
              next(errorLogin);
            }
          }));
          res.status(201).json(user);
        }

    //passport.authenticate('register', callback)(req);

});


// LOGIN - GENERATE JWT FOR ACCESS
usersRoutes.post('/login', (req, res, next) => {
    const callback = (error, user) => {
    if (error) {
        console.log("Error logging user in", error);
        return next(error);
        }

     //const token = signIn(user, config.JWT_SECRET);
    //return res.status(200).json({ user: user, token });
        }
      
    //passport.authenticate('login', callback)(req);
});

//LOGOUT - END SESSION
usersRoutes.post('/logout', (req, res, next) => {

    if (!req.user) {
     return res.sendStatus(304);
    }

    return res.status(200).json('Closed user session');
});

module.exports = usersRoutes;