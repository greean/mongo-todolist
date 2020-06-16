const mongoose = require('mongoose');
// const { Schema, model } = require('mongoose');

const User = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

User.statics.validateSignup = async function (name) {
    // let userDocument = await this.findOne({name});
    let existingEmail = await User.findOne({ email })
    let existingUsername = await User.findOne({ name })

    // object || null
    if (existingEmail || existingUsername) {
        return false;
    }

    return true;
}

module.exports = mongoose.model('users', User);