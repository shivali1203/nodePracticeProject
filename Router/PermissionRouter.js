const express = require('express')
const router = express.Router()
const permission = require('../Controller/PermissionController')
router.post('/permission', permission.addPermission)

module.exports = router
