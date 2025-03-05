import { request, response } from "express";
import users from "../model/user-schema.js";
import bcrypt from 'bcrypt';


export const userSignup = async (request, response) => {
    try {
        const existingUser = await users.findOne({
            $or: [
                { email: request.body.email },
                { username: request.body.username }
            ]
        });

        if (existingUser) {
            return response.status(400).json({ message: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const newUser = new users({ ...request.body, password: hashedPassword });

        await newUser.save();
        response.status(200).json({ message: "Signup successful" });

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
};



export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await users.findOne({ 
            $or: [{ username }, { email: username }]
        });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful" });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
