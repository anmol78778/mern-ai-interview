import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app=express()
app.use(cors({
    origin:"https://ai-interview-g0ys.onrender.com",
    credentials:true
}))

dotenv.config()



app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT


app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const mongo=process.env.MONGODB_URL
app.listen(PORT,()=>{
    connectDb()
    console.log(`server running on port ${PORT} `)
})