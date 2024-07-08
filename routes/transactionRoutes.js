import express from 'express'
import { addTransactions, deleteTransactions, editTransactions, getAllTransactions } from '../controllers/transactionControllers.js'

const router = express.Router()

//routes
//add transactions
router.post('/add-transaction',addTransactions)

//edit transactions
router.post('/edit-transaction',editTransactions)

//delete transactions
router.post('/delete-transaction',deleteTransactions)

//get all tracsactions
router.post('/get-transactions',getAllTransactions)

export default router