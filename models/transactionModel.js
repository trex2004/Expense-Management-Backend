import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, "Amount is required"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        reference: {
            type: String
        },
        description: {
            type: String
        },
        date: {
            type: String,
            required: [true, "Date is required"],
        }
    }, {
        timestamps: true
    }
)

const transactionModel = mongoose.model('transaction', transactionSchema)
export default transactionModel