import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "../utils/token.js";

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "User already Exist" });
        }

        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User.create({
            fullName: fullName,
            email: email,
            password: hashedPassword
        })

        if (!newUser) {
            return res.status(400).json({ error: "Invalid User data" });
        }

        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email
        })

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ error: "Internal server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
        })
    } catch (error) {
        console.log("Error in user login", error.message)
        res.status(500).json({ error: "Internal server Error" })
    }
}

export const logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 0 })
    res.status(200).json({ message: "Logged out Successfully" })
}