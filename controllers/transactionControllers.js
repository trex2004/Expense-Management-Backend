import transactionModel from '../models/transactionModel.js'
import moment from 'moment'

export const getAllTransactions = async (req,res) => {
    try {
        const {frequency,selectedDate,selectedType} = req.body
        const tranctions = await transactionModel.find({
            ...(frequency!=="custom" ? {
                date: {
                    $gt : moment().subtract(Number(frequency),'d').toDate()
                }
            }:{
                date: {
                    $gte : selectedDate[0],
                    $lte : selectedDate[1]
                }
            }),
            userId: req.body.userId,
            ...(selectedType!=='all' && {type:selectedType})
        })
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

export const editTransactions = async (req,res) => {
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload)
        res.status(200).send("Edit succesful")
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export const deleteTransactions = async (req,res) => {
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId})
        res.status(200).send("Deleted Successfully")
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}