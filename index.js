const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 4000
app.use(cors())//cors package is for integration with the frontend
app.use(express.json())

const role = require('./Router/RoleRouter')
app.use('/role', role)

const user = require('./Router/UserRouter')
app.use('/user', user)

const permission = require('./Router/PermissionRouter')
app.use('/permission', permission)

const permissionGroup = require('./Router/PermissionGroupRouter')
app.use('/permissionGroup', permissionGroup)

const fileUpload = require('./Router/FileUploadRouter')
app.use('fileUpload', fileUpload)
try
{
mongoose.connect("mongodb+srv://shivalipatel1203:51kBswtuK9xuai3Q@cluster0.upb37hp.mongodb.net/?retryWrites=true&w=majority")}
catch(err){console.log(err)}

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

