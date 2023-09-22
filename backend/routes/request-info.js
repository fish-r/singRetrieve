const express = require('express');
const { getPersonData } = require('../utils/getPersonData');
const router = express.Router()
require('dotenv').config();
const verifyToken = require('../middleware/verifyToken');
const getPersonParams = require('../utils/getPersonParams');

// get personal data when requested
router.get('/api/request-info', (req, res, next) => {
    console.log('Going to home dashboard')
    try {
        const uinfin = verifyToken(req, res, next)
        const data = getPersonData(uinfin) // simulate api call to get person data
        const params = req.params;
        if (!data) {
            res.status(500).json({
                "error": "Failed to get person data"
            })
        }
        res.json(data.name)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "error": error
        })
    }

});

// get list of retrievable data and mapping
router.get('/api/request-params', (req, res, next) => {
    console.log('Requesting for info parameters')
    try {
        const uinfin = verifyToken(req, res, next)

        const data = getPersonParams(uinfin);
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