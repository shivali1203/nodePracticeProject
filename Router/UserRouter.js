const express = require('express')
const router = express.Router()
const user = require('../Controller/UserController')
router.post('/user', user.addUser)
router.get('/loginUser', user.loginUser)
router.get('/user', user.getAllUsers)

router.post('/userSignUp', user.signUP)//signup api

module.exports = router