const responseUtil = require("../Utils/Responses");
const errorTypes = require("../Utils/constants");
const tokenUtil = require("../Utils/jwtToken");
module.exports.auth =  (req, res, next) => {


        var token = req.headers.authorization
        if(token==undefined || token==null){
            res.json(responseUtil.errorResponse(errorTypes.NOT_AUTHORIZED,"Token not found"))
        }
        try{
            if(token.startsWith("Bearer ")){
                token = token.slice(7,token.length)
                const user = tokenUtil.verifyToken(token)
                if(user){
                    req.user = user
                    next()
                }
                else{
                    res.json(responseUtil.errorResponse(errorTypes.NOT_AUTHORIZED,"Token is Not valid..not proveded Bearer"))
                }


            }
            else{

                res.json(responseUtil.errorResponse(errorTypes.NOT_AUTHORIZED,"Token is Not valid..1"))
            }

        }catch(err){
            console.log(err)

                res.json(responseUtil.errorResponse(errorTypes.NOT_AUTHORIZED,"Token is Not valid.."))

        }



}