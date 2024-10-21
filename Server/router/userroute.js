import express from 'express'
import { clerkwebhooks } from '../controllers/UserController.js'
// clerkwebhooks

const router = express.Router()

router.post('/webhooks',clerkwebhooks)

export default router