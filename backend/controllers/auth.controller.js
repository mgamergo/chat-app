import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"})
        }

        const user = await User.findOne({username})

        if (user) {
            return res.status(400).json({error: "A user already exists with that username"})
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfileURL = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfileURL = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfileURL : girlProfileURL,
        })

        if(newUser) {
            await newUser.save()
    
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        } else {
            res.status(500).json({error: "Invalid user Data"})
        }

    } catch (error) {
        console.log("Creating user error:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = (req, res) => {
    res.send("Login Page");
}

export const logout = (req, res) => {
    res.send("Logout Page");
}