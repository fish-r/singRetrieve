const express = require('express');
const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();

/**
 * Verifies the jwt and returns the userId 
 */

router.get('/api/verify-token', (req, res, next) => {
    console.log('Going to home dashboard')
    try {
        console.log('Verifying token')
        const headers = req.headers
        console.log(headers)
        const token = headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token expired or invalid' });
            }
            console.log('Successfully verified')
            console.log(decoded)
            const credentials = json(decoded)
            req.uinfin = credentials.uinfin
            res.status(200).send({
                message: "Token verified"
            })
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "error": error
        })
    }

});

module.exports = router;
