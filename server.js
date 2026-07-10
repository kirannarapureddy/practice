const express=require("express")
const app=express();
app.use(express.json())
const connectDB=require("./config/db")
const post1routes=require("./routes/posts1")
const post2routes=require("./routes/posts2")
app.use("/post1",post1routes)
app.use("/post2",post2routes)
connectDB();
app.listen(3003,()=>{
    console.log("Server is running at http://localhost:3003")
})