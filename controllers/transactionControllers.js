import transactionModel from '../models/transactionModel.js'

export const getAllTransactions = async (req,res) => {
    try {
        const tranctions = await transactionModel.find({})
        res.status(200).json(tranctions)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export const addTransactions = async (req,res) => {
    try {
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send("Successful")
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}