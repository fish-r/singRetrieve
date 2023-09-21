const express = require('express');
const { getPersonData } = require('../utils/getPersonData');
const router = express.Router()
require('dotenv').config();

const users = [
    { id: 1, username: 'abc', password: '123' },
    { id: 2, username: 'T1234567B', password: 'password2' },
];

// Login
router.get('/home', (req, res) => {
    try {
        const data = getPersonData()
        if (!data) {
            res.status(500).json({
                "error": "Failed to get person data"
            })
        }
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "error": error
        })
    }

});


module.exports = router