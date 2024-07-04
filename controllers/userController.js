import userModel from '../models/usersModel.js'

//login controller
export const loginController = async (req, res) => {
    try {
        console.log(req.body)
        const { name, password } = req.body
        const user = await userModel.findOne({ name, password })

        if (!user) {
            return res.status(404).send('user not found')
        }

        res.status(200).json({ success: true, user })

    } catch (error) {
        res.status(400).json({ ststus: false, error })
    }
}

//register controller
export const registerController = async (req,res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({success:true,newUser})
    } catch (error) {
        res.status(400).json({ ststus: false, error })
    }
}