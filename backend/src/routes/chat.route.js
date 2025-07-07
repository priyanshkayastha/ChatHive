import express from 'express'
import { protectedRoute } from '../middleware/auth.middleware.js'
import { getStreamToken } from '../controllers/chat.contoller.js'
const router=express.Router()

router.get('/token',protectedRoute,getStreamToken)

export default router