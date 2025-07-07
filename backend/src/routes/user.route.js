import express from 'express'
import { protectedRoute } from '../middleware/auth.middleware.js'
import { getFriendRequests, getMyFriends, getOutgoingFriendRequests, getRecommendedUsers, sendFriendRequest, sendFriendRequestAccept } from '../controllers/user.controller.js'

const router=express.Router()

//apply auth middleware to all routes
router.use(protectedRoute)

router.get('/',getRecommendedUsers)
router.get('/friends',getMyFriends)

router.post('/friend-request/:id',sendFriendRequest)
router.put('/friend-request/:id/accept',sendFriendRequestAccept)

router.get('/friend-request/',getFriendRequests)

router.get('/outgoing-friend-request/',getOutgoingFriendRequests)

export default router