const express = require('express');
const passport = require('passport');
const User = require('../models/User');

/* //AUTHENTICATION
const { signIn } = require('../authentication/jsonwebtoken');
const { isAuthenticated } = require('../../middlewares/auth.middleware'); */

const usersRouter = express.Router();


// LIST USERS

usersRouter.get('/', (req, res, next) => {

    User.find().populate('users')
        .then( users => {
            return res.status(200).json(users);
        })
        .catch( err => {
            const error = new Error(err)
            error.status = 500
            return next(error)
        })

})  

// FIND USER BY ID 

usersRouter.get('/:id', (req, res) => {
    
    const id = req.params.id

    return User.findById(id).populate('users')
                .then( users => {

                    if(!users) {
                        const error = new Error('User not found')
                        error.status = 404
                        return next(error)
                    }
                    return res.status(200).json(users);
                })
                .catch( err => {
                    const error = new Error(err)
                    error.status = 500
                    return next(error)
                })
});


// REGISTER USER (EMAIL VALIDATION)

usersRouter.post('/register',
 (req, res, next) => {

    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        users: []
    })

    return newUser.save()
            .then( () => {
                return res.status(201).json(newUser)
            })
            .catch( err => {
                const error = new Error(err)
                error.status = 500
                return next(error)
            })

    //passport.authenticate('register', callback)(req);

});


// LOGIN - GENERATE JWT FOR ACCESS

/* usersRouter.post('/login', (req, res, next) => {
    const callback = (error, user) => {
    if (error) {
        console.log("Error logging user in", error);
        return next(error);
        }

     const token = signIn(user, config.JWT_SECRET);
    return res.status(200).json({ user: user, token });
        }
      
    passport.authenticate('login', callback)(req);
}); */

//LOGOUT - END SESSION
usersRouter.post('/logout', (req, res, next) => {

    if (!req.user) {
     return res.sendStatus(304);
    }

    return res.status(200).json('Closed user session');
});

module.exports = usersRouter;