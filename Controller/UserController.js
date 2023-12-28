const userModel = require('../Model/UserModel')
const response = require('../Utils/Responses')
const consts = require ('../Utils/constants')
const encryption = require('../Utils/Encryption')
const jwtToken = require('../Utils/jwtToken')

module.exports.addUser = async (req, res)=>{
    const users = Object.assign({}, req.body)
    users.password = await encryption.encryptPassword(req.body.password)
    try{
        
        const user = await userModel.create(users)
        if(user){
                res.json(
                    response.succesResponse("POST", user, "USER ADDED")
                )
        }
        else 
        {
            res.json(
                response.failureResponse(consts.BAD_REQUEST, "BAD REQUEST")
            )
        }
    }
    catch(e){
        console.log(e)
    }
}
module.exports.getAllUsers = async (req, res) => {
    try{
        
        const getUsers = await userModel.find()
        console.log(getUsers)
        if(getUsers){
            res.json(response.succesResponse("GET", getUsers, "All the users retrieved"))
        }else{
            res.json(response.failureResponse(consts.BAD_REQUEST, "bad request try again later"))
        }
    }
    catch(e){
        console.log("error occured", e)
    }
}
module.exports.loginUser = async (req, res) => {
     
    try
    {
        const user = await userModel.find({email : req.email})
        if(user!=null || user!=undefined || user==1){
            const password = encryption.comparePasswords(req.body, user.password)
            if(password){
                const token = await jwtToken.generateToken(user.toObject())
                res.json(
                    response.succesResponse("GET", user, "LOGIN SUCCESSFULL")
                )
            }
            else {
               
            }
        }
        else {
           
        }
    }

    catch (e)
    {
        
        console.log("ERROR     :-------   ",e)
    }
}

module.exports.signUP = async (req, res)=>{

    try{
        const user = Object.assign({}, req.body)
        user.password = encryption.encryptPassword(req.body.password)
        const dummy = await userModel.find({email : req.body.email})
        if(dummy == null || dummy == undefined || dummy == 0){
            const user = Object.assign({}, req.body)
            user.password = await encryption.encryptPassword(req.body.password)
            const createdUser = await userModel.create(user)
            if(createdUser){
                res.json(
                    response.succesResponse("POST", createdUser, "user successfully created")
                )
            }
            else {
                res.json(
                    response.failureResponse(consts.NOT_IMPLEMENTED, "USER NOT CREATED")
                )
            }
        }
        else{
            res.json(
                response.failureResponse(consts.NOT_IMPLEMENTED, "Email already exists")
            )
        }

    }
    catch(e){
        console.log(e)
        response.json(
            response.failureResponse(consts.INTERNAL_SERVER_ERROR, "server error , user not created")
        )
    }
}