const express = require("express")
const app=express()

app.use(express.json());
app.post("/post2",(req,res)=>{
    const {name,age,emai}=req.body
    res.json({
        message:req.body
    })
})



app.listen(3001,()=>{
    console.log("server is running at https://localhost:3001")
})