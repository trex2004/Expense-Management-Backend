import express from 'express'
import { loginController, registerController } from '../controllers/userController.js'

const router = express.Router()

//routes

//login user
router.post('/login', loginController)

//register user
router.post('/register', registerController)

export default router