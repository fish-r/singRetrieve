const express = require('express')
const router = express.Router()
require('dotenv').config();

const users = [
    { id: 1, username: 'abc', password: '123' },
    { id: 2, username: 'T1234567B', password: 'password2' },
];

// Login
router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find((u) => u.username === username && u.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // secret can be found in .env
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET, {
            expiresIn: '30m',
        });
        res.json({ token });
    } catch (error) {
        res.status(500).send({
            "error": error
        })
    }

});


module.exports = router