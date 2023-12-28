const permissionModel = require('../Model/PermissionModel')
const response = require('../Utils/Responses')
const consts = require ('../Utils/constants')

module.exports.addPermission = async (req, res)=>{
 try{
        const permission = await permissionModel.create(req.body)
        if(permission){
            res.json(
                response.succesResponse("POST", permission, "Successfully saved")
            )
        }
        else 
        {
            res.json(
                res.json(
                    response.failureResponse(consts.INTERNAL_SERVER_ERROR, "internal error")
                )
            )
        }
 }
 catch(e){
    console.log(e, "failed")
 }
} 