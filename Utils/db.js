const mongoose = require ('mongoose')
const MONGO_URI = "mongodb://localhost:27017"
const getdbconnection = async () =>{
    try {
        const dbconnection = mongoose.connect(process.MONGO_URI)
        console.log(MONGO_URI,"db connection succesful")
    }
    catch(e){
        console.log(e)
    }
}