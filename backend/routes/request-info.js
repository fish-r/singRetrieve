const express = require('express');
const { getPersonData } = require('../utils/getPersonData');
const router = express.Router()
require('dotenv').config();
const getPersonParams = require('../utils/getPersonParams');
const verifyTokenMiddleware = require('../middleware/token-middleware');

// get personal data when requested
router.get('/api/request-info', verifyTokenMiddleware, (req, res, next) => {
    console.log('Calling /api/request-info')
    try {
        const uinfin = req.uinfin
        const data = getPersonData(uinfin) // simulate api call to get person data
        if (!data) {
            res.status(500).json({
                "error": "Failed to get person data"
            })
        }
        const scope = req.query.scope;
        console.log(scope)
        const arr = scope.split(' ')
        console.log(arr)
        const filtered = Object.keys(data).reduce((output, key) => {
            if (arr.includes(key)) {
                output[key] = data[key]
            }
            return output
        }, {});

        res.json(filtered)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "error": error
        })
    }

});

// get list of retrievable data and mapping
router.get('/api/request-params', verifyTokenMiddleware, (req, res, next) => {
    console.log('Calling /api/request-params')
    try {
        const uinfin = req.uinfin
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