const express = require('express');
const { getPersonData } = require('../utils/getPersonData');
const router = express.Router()
require('dotenv').config();
const verifyToken = require('../middleware/verifyToken')

// get personal data when requested
router.get('/home', (req, res, next) => {
    console.log('Going to home dashboard')
    try {
        const uinfin = verifyToken(req, res, next)
        const data = getPersonData(uinfin)
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