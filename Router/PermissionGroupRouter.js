const express = require('express')
const router = express.Router()
const permissionGroup = require('../Controller/PermissionGroupController')
router.post('/permissionGroup', permissionGroup.addPermissionGroup)
router.get('/permissionGroup',permissionGroup.getAll)
module.exports = router