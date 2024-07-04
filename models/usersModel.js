import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,'enter name']
        },

        email: {
            type: String,
            required: [true,'enter email'],
            unique: true
        },

        password: {
            type: String,
            requiered: [true,'enter password']
        }
    },
    {
        timestamps: true
    }
)


const User = mongoose.model("User",userSchema)
export default User