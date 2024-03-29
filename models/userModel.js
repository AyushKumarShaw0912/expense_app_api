const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports.userModel=mongoose.model("user",userSchema)