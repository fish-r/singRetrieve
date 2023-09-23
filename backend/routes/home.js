const express = require('express');
const { getPersonData } = require('../utils/getPersonData');
const verifyTokenMiddleware = require('../middleware/token-middleware');
const router = express.Router()
require('dotenv').config();

router.use(verifyTokenMiddleware)

// get personal data when requested
router.get('/api/home', (req, res, next) => {
    console.log('Calling /api/home')
    try {
        // const uinfin = verifyToken(req, res, next)
        const uinfin = req.uinfin
        const data = getPersonData(uinfin) // simulate api call to get person data
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

module.exports = router