const errorTypes = require('./constants')
module.exports.succesResponse = (method, object, message) => {
    switch(method){
        case "GET":
            return {
                status : 200, 
                message : message,
                data : object
            }
        case "POST":
            return{
                status:201, 
                message : message,
                D:"done",
                data : object
            }
            
        case "PUT":
            return {
                status : 200, 
                message : message,
                data : object
            }
          
        case "DELETE":
                return {
                    status : 204, 
                    message : message,
                   
                }
                break;
            }

   
}

module.exports.failureResponse = (type, error) =>{
    switch(type){
        case errorTypes.NOT_FOUND:
            return {
                status: 404,
                message: error
            }
        case errorTypes.INTERNAL_SERVER_ERROR:
            return {
                status: 500,
                message: error
            }
        case errorTypes.NOT_IMPLEMENTED:
            return {
                status: 500,
                message: error}
        case errorTypes.NOT_AUTHORIZED:
            return {
                status: 401,
                message: error
            }
        case errorTypes.NOT_ALLOWED:
            return {
                status: 403,
                message: error
            }
        case errorTypes.NOT_AUTHORIZED:
            return {
                status: 401,
                message: error
            }
                
        break;
    }
}