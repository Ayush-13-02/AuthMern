const express = require('express')
const { register, login, forgotpassword } = require('../controllers/auth')

const router = express.Router()

router
.post('/register',register)
.post('/login',login)
.post('/forgotpassword',forgotpassword)
.post('/register',register)

module.exports = router;