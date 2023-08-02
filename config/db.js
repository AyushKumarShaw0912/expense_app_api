require("dotenv").config()
const mongoose=require("mongoose")

const dbConnect=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true})
     if(mongoose.connection.readyState===1)
     console.log("db connected")
    }
    catch(err){
    console.log(err)}

}
module.exports=dbConnect