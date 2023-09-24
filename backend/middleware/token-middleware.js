const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyTokenMiddleware = (req, res, next) => {
    try {
        const headers = req.headers
        const token = headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        jwt.verify(token, "da2b01856d18aa5a3a72a0cb76b598bd7aefc77ed6d66b2830006269a502cbc2", (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token expired or invalid' });
            }
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