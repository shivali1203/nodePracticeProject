const express = require('express')
const router = express.Router()

const role = require('../Controller/RoleController')
router.post('/role', role.addRole)

module.exports = router