const { userModel } = require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config()

//register
module.exports.register=async(req,res)=>{
    try {
        const {username,password}=req.body
const user=await  userModel.findOne({username})
if(user){
    return res.status(404).json({success:false,message:"User already exists"})
} 
const hashedPassword=await bcrypt.hash(password,10)
await userModel.create({
    username,
password:hashedPassword
})  
res.status(201).json({
    success:true,
    message:"User register successfully"
})    
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
        
    }
}

//login
module.exports.login=async(req,res)=>{
    try {
        const {username,password}=req.body
        const user=await  userModel.findOne({username})
        if(!user){
            return res.status(404).json({success:false,message:"No user found! Register first"})
        } 
        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch){
            const token= jwt.sign({id:user._id},process.env.SECRET)
            res.status(200).json({
                success:true,
                message:"Login successfully",
                token,
                userId:user._id,
                username:user.username
            })    
            
        }
        else{
            res.status(404).json({success:false,message:"Invalid Creditenials"})
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
    }
}