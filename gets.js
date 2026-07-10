const express = require("express")
const app=express()
app.use(express.json())

app.get("/alldata",(req,res)=>{
    //const variable_name = query
    //res.json(variable_name)
    
})

app.get("/sdata/:id",(req,res)=>{
    //const variable_name = query
    //res.json(variable_name)

})

app.delete("/delete/:id",(req,res)=>{
    //const variable_name = query
    //res.json(variable_name)
})



app.listen(3002,()=>{
    console.log("server is running at https://localhost:3002")
})