import express from 'express';
import { user } from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// registration function
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existinguser = await user.findOne({ email: email })
        if (existinguser) {
            return res.status(400).json({ message: "Email already exists please login" })

        }
        const hashedpassword = await bcrypt.hash(password, 12);
        const users = await user.create({ name: name, email: email, password: hashedpassword })
        
        
        return res.json({ message: "user registerd successfully", users });

    }
    catch (error) {
        res.json(error.message);
    }
}
// login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finduser = await user.findOne({ email: email })
        if (!finduser) {
            return res.status(400).json({ message: "Email not found" })
        }
        const isMatch = await bcrypt.compare(password, finduser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password try again" })
        }
        const token = jwt.sign({ id: finduser._id }, process.env.SECRET_KEY)
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        return res.json({ message: 'login succesful', finduser, token });

    } catch (error) {
        return res.json(error.message);
    }
}
export { register, login }
