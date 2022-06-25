import User from "../models/User.js"
import { hashPassword } from "../utilities/lib.js"

export const loginUser = (req, res) => {
    // TODO: login
}

export const signUpUser = async (req, res) => {
    // TODO: signup
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ msg: "user already exists" });
        }

        const hashedPassword = await hashPassword(password)

        const newUser = new User({
            username,
            password: hashedPassword
        })

        newUser.save()

        res.status(200).json({
            user: newUser
        })
    } catch (err) { console.log(err) }
}

export const getAuthStatus = (req, res) => {
    // TODO: auth status
    res.send({ isAuth: req.isAuthenticated() })
}