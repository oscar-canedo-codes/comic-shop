const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String },
    role: { type: String, require: true, enum: ["admin", "authenticate"], default: "authenticate" }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;