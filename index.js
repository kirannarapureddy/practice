const express = require("express")
const app=express()

app.post("/post1",(req,res)=>{
    res.json({message:"post Api requested"})

})

app.get("/get1",(req,res)=>{
    res.json({message:"GET API REQUESTED"})
})

app.put("/put1",(req,res)=>{
    res.json({message:"PuT API REQUESTED"})
})

app.delete("/delete1",(req,res)=>{
    res.json({message:"DELETE API REQUESTED"})
})

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})