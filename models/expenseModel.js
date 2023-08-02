const mongoose=require("mongoose")
const expenseSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reference:{
        type:String,
    },
    date:{
        type:Date,
        //required:true
    }
},{timestamps:true})

module.exports.expenseModel=mongoose.model("transactions",expenseSchema)