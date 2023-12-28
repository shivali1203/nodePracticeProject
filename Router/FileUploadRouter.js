const router = require('express').Router();
const fileUploadController = require('../Controller/FileUploadController');
router.post('/upload', fileUploadController.uploadFile);
module.exports = router;
