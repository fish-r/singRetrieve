const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Verifies the jwt and returns the userId 
 */
const verifyToken = (req, res, next) => {
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
        return credentials.uinfin
    });
}

module.exports = verifyToken;
