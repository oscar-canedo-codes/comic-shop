const mongoose = require('mongoose');
const {setError} = require('../../utils/error');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../utils/validators');
const Schema = mongoose.Schema;

const userSchema = new Schema ({

    name: { type: String, trim: true, required: false },
    date: { type: Date, trim: true, required: false },
    password: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },

}, {
    timestamps: true,
});

userSchema.pre("save", function(next){
    
    if (!validationPassword(this.password)) {
        return next(setError(404,'Incorrect password'));
    }
    if (!validationEmail(this.email)) {
        return next(setError(404,'This email already exists'));
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;