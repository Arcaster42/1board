const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id: 0,
    title: String,
    content: String,
    author: String,
    children: Array
})

module.exports = mongoose.model('post', postSchema)