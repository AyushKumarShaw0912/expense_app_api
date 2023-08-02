const { expenseModel } = require("../models/expenseModel")
//creation
module.exports.createExpense=async(req,res)=>{
    try {
        const transaction=await expenseModel.create(req.body)
        res.status(201).json({
            success:true,
            message:"Transaction created successfully",
        })   
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
    }
}

//getting transction
module.exports.getTransaction=async(req,res)=>{
    try {
        const allTransactions=await expenseModel.find({
            userId:req.params.id
        })
        res.status(200).json({
            success:true,
            allTransactions
            
        })   
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
    }
}

//updating transaction
module.exports.updateTransaction=async(req,res)=>{
    try {
        const transaction=await expenseModel.findById(req.params.id)
        if(transaction?.userId===req.body.userId){
            await transaction.updateOne({$set:req.body})
        
        res.status(200).json({
            success:true,
            message:"Updated successfully"  
        }) 
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
    }
}

//deleting transaction
module.exports.deleteTransaction=async(req,res)=>{
    try {
        const transaction=await expenseModel.findById(req.params.id)
        if(transaction?.userId===req.body.userId){
            await transaction.deleteOne()
            res.status(200).json({
                success:true,
                message:"Deleted successfully"  
            }) 
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
    }
}