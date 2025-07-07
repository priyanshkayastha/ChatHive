import express from 'express'
import dotenv from 'dotenv'

import cookieParser from 'cookie-parser'

import authRoutes from '../src/routes/auth.route.js'
import userRoutes from '../src/routes/user.route.js'
import chatRoutes from '../src/routes/user.route.js'

import { connectDB } from './lib/db.js'


//config:-to read file of content
dotenv.config()

const app=express()
const PORT=process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/chat',chatRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    connectDB()
})