const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    content: String,
    date: Date,
    user: String
})

module.exports = mongoose.model('message', messageSchema)