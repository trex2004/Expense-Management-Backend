import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
    {
        userId: {
            type:String,
            required: [true],
        },
        amount: {
            type: Number,
            required: [true, "Amount is required"],
        },
        type:{
            type:String,
            required: [true,"Type is required"]
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        description: {
            type: String
        },
        date: {
            type: Date,
            required: [true, "Date is required"],
        }
    }, {
        timestamps: true
    }
)

const transactionModel = mongoose.model('transaction', transactionSchema)
export default transactionModel