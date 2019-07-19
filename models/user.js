const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    banned: Boolean,
    admin: Boolean
})

module.exports = mongoose.model('user', userSchema)