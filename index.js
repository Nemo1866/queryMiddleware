const express=require("express")
const app=express()
const middleware=require("./middleware")



app.get("/",middleware,(req,res)=>{
    res.send("<h1>Welcome to our HomePage</h1>")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})