const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const { body , validationResult}  = require('express-validator')
router.post("/createuser", 
[
    body('email').isEmail().withMessage('Invalid email format'),
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], 
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, location } = req.body;

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            password: hashedPassword,
            email,
            location
        });

        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

//second one - for login
router.post("/loginuser",
[
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
        }

        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
        }

        return res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});



module.exports = router; 