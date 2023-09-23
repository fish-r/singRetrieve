const express = require('express');
const { json } = require('express');
const jwt = require('jsonwebtoken');
const verifyTokenMiddleware = require('../middleware/token-middleware');
require('dotenv').config();
const router = express.Router();

/**
 * Verifies the jwt and returns the userId 
 */

router.get('/api/verify-token', verifyTokenMiddleware, (req, res, next) => {
    res.status(200).send({
        message: "Token verified"
    })
});

module.exports = router;
