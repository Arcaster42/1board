//(1) Server Configuration
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/')))

//(2) Modules
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db_server = '127.0.0.1'
const db_name = '1board'
const PostModel = require('./models/post')
const messageModel = require('./models/message')
const localStorage = require('local-storage')
const jwt = require('jsonwebtoken')

//(3) Routes
app.get('/', (req, res) => {
    messageModel.find((err, messages) => {
        res.render('index', {messages: messages})
    })
})

//(4) Server Start
app.listen(port, () => console.log(`Listening on ${port}`))
mongoose.connect(`mongodb://${db_server}/${db_name}`)
.catch(err => console.log(err))