const express=require("express")
const cors=require("cors")
const  dbConnect  = require("./config/db")
const userRoutes=require('./routes/userRoutes')
const transactionRoutes=require('./routes/expenseRoute')
require("dotenv").config()
const app=express()

//middlewares
app.use(cors())
app.use(express.json())

//user route
app.use("/api/v1/users",userRoutes)

//transaction routes
app.use("/api/v1/transactions",transactionRoutes)
//databse connect
dbConnect()
//server
app.listen(process.env.PORT,()=>console.log("Server is running"))