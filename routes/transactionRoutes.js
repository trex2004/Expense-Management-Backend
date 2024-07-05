import express from 'express'
import { addTransactions, getAllTransactions } from '../controllers/transactionControllers.js'

const router = express.Router()

//routes
//add transactions
router.post('/add-transaction',addTransactions)

//get all tracsactions
router.get('/get-transactions',getAllTransactions)

export default router