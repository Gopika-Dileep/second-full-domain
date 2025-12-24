const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    throw new Error("something went wrong")
})

app.use((err,req,res,next)=>{
    console.log("i am here")
    res.status(err.status||500).json({
        success:false,
        message:err.message||"internal server error"
    })
})

app.listen(5000,()=>{
    console.log("server is running")
})