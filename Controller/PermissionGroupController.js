const permissionGroupModel = require('../Model/PermissionGroupModel')
const response = require('../Utils/Responses')
const consts = require ('../Utils/constants')

module.exports.addPermissionGroup = async (req, res)=>{
 try{
        const permissionGroup = await permissionGroupModel.create(req.body)
        if(permissionGroup){
            res.json(
                response.succesResponse("POST", permissionGroup, "Successfully saved")
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

module.exports.getAll = async (req, res) =>{

try{
 const all = await permissionGroupModel.find().populate('permissions')
 if(all!=null || all!=undefined || all>0){
    res.json(
        response.succesResponse("GET", all,"derived")
    )
 }
 else 
 {
    res.json(
        response.failureResponse(consts.INTERNAL_SERVER_ERROR, "internal error")
    )
 }
}   
catch(e){
console.log("ERRRRORRRRR      +>", e)
} 
}