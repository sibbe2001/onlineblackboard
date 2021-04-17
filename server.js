// Chack for Porduction Enviormet
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()}

// Libary Imports
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Router Import 
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// Database Connection Handeling
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Mongoose'))

// Default Rout
app.use('/', indexRouter)

// Listening Port
app.listen(process.env.PORT || 3000)