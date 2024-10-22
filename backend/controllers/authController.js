const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User'); // Ensure you have a User model defined

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Redirect to dashboard after signup
        res.status(201).json({ message: "User created successfully", user: newUser, redirectTo: '/api/dashboard' });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check password (In practice, you would hash the password and use bcrypt for comparison)
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Redirect to dashboard after login
        res.status(200).json({ message: "Login successful", user, redirectTo: '/api/dashboard' });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { signup, login };
