const { createExpense, getTransaction, updateTransaction, deleteTransaction } = require("../controllers/expense")

const router=require("express").Router()

//creation of transaction
router.post("/create",createExpense)

//getting transaction
router.post("/:id",getTransaction)

//updating transaction
router.put("/edit/:id",updateTransaction)

//delete transaction
router.delete("/delete/:id",deleteTransaction)
module.exports=router