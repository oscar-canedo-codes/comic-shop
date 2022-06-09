const User = require('../api/models/User');
const {setError} = require('../utils/error');
const JwtUtils = require('../utils/jwt');

const isAuth = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization;
        if (!token) {
        
            return next(setError(404,'Token does not exist'));
        }
        const parsedToken = token.replace('Bearer ', '');
        const validToken = JwtUtils.verifyToken(parsedToken, process.env.JWT_SECRET);
        const userLogged = await User.findById(validToken.id);
        
        req.user = userLogged;
        next();
    } catch (error) {
        return next(error)
    }
}

module.exports = { isAuth }