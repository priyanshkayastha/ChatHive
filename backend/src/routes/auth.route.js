import express from 'express'
import { login, logout, onboard, signup } from '../controllers/auth.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'
const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

//onboarding
router.post('/onboarding',protectedRoute,onboard)

//check user is logged in or not
router.get('/me',protectedRoute,(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
})

export default router