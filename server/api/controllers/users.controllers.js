const User = require('../models/User');
const bcrypt = require('bcrypt');
const JwtUtils = require('../../utils/jwt');
const {setError} = require('../../utils/error')

const register = async (req, res, next) => {

    try {

        const user = new User(req.body);
        const userExist = await User.findOne({ email: user.email })
        if (userExist) {
            return next(setError(404,'This Email already exists'))
        }
        const userDB = await user.save();
        return res.status(201).json(userDB.name)

    } catch (error) {
        return next(error)
    }
}

const login = async (req, res, next) => {

    try {
        
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            
            return next(setError(404,'This email already exists'))
        }
       
        if (bcrypt.compareSync(req.body.password, user.password)) {
            
            const token = JwtUtils.generateToken(user._id, user.email);
            
            return res.status(200).json(token);
        }
    } catch (error) {

    }
}

const logout = (req, res, next) => {
    try {
        // DELETES TOKEN -> RETURNS NULL
        const token = null;
        return res.status(201).json(token)
    } catch (error) {
        return next(error)
    }
}

module.exports = { register, login, logout }