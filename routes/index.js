const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/About', (req, res) => {
    res.render('about')
})

router.get('/Impressum', (req, res) => {
    res.render('impressum')
})

router.get('/Login', (req, res) => {
    res.render('login')
})

module.exports = router