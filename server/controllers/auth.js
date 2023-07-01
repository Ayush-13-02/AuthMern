const User = require("../models/User");
const bcryt = require('bcrypt')

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {

        const user = await User.create({
            username, email, password
        })

        res.status(200).json({
            success: true,
            user: user
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: "Please provide Email and Password"
        })
    }
    try {
        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "Invaild Credentials"
            })
        }
        
        const isMatch = await user.matchpassword(password,user.password);

        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Password Incorrect"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Login Successfully"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message
        })
    }
}

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Passwordgister Route")
}

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route")
}