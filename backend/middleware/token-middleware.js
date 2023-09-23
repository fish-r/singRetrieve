const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyTokenMiddleware = (req, res, next) => {
    try {
        console.log('Verifying token')
        const headers = req.headers
        const token = headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                console.log("Failed to verify token")
                return res.status(401).json({ message: 'Token expired or invalid' });
            }
            console.log('Successfully verified')
            const credentials = json(decoded)
            req.uinfin = credentials.uinfin
            next()
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "error": error
        })
    }
}

module.exports = verifyTokenMiddleware;