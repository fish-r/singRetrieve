require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const homeRoutes = require('./routes/home')
const getUsers = require('./utils/getUsers')


port = 8080
const app = express()

app.use(express.json())
app.use(cors())

app.use(homeRoutes)

// returns a jwt for authentication
app.post('/api/login', (req, res) => {
    try {
        console.log('Attemping to Login')
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
        // secret can be found in .env
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET, {
            expiresIn: '30m', // set expiry for web safety
        });
        console.log("Successful login, token set.")
        console.log(token)
        res.status(200).setHeader({ "authorization": token }).redirect('/home')

    } catch (error) {
        res.status(500).send({
            "error": error
        })
    }

});

// disable caching
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
    next();
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})