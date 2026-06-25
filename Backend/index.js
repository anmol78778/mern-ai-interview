import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
const app=express()


dotenv.config()
const PORT=process.env.PORT


app.get('/',(req,res)=>{
    return res.json({message:"server started"})
})



const mongo=process.env.MONGODB_URL
app.listen(PORT,()=>{
    connectDb()
    console.log(`server running on port ${PORT} `)
})