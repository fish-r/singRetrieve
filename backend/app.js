require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const homeRoutes = require('./routes/home')
const requestInfoRoutes = require('./routes/request-info')
const verifyToken = require('./routes/verify-token')
const getUsers = require('./utils/getUsers')


port = 8080
const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
    next();
});


// routes
app.use(homeRoutes)
app.use(requestInfoRoutes)
app.use(verifyToken)

// returns a jwt for authentication
app.post('/api/login', (req, res) => {
    try {
        console.log('Calling /api/login')
        const { username, password } = req.body
        console.log(username, password)
        if (!username || !password) {
            return res.status(400).json({ message: 'Invalid username or password' })
        }
        const user = getUsers.getUserByUsername(username)
        console.log(user)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // secret should be stored in .env, but put here for easy testing
        const token = jwt.sign({ id: user.id, username: user.username }, "da2b01856d18aa5a3a72a0cb76b598bd7aefc77ed6d66b2830006269a502cbc2", {
            expiresIn: '30m', // set expiry for web safety
        });
        console.log("Successful login, token set.")
        console.log(token)
        res.status(200).json({ "token": token })

    } catch (error) {
        res.status(500).send({
            "error": error
        })
    }

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})