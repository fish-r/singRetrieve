require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')

port = 8080
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ msg: "welcome" })
})

const users = [
    { id: 1, username: 'abc', password: '123' },
    { id: 2, username: 'T1234567B', password: 'password2' },
];

// returns a jwt for authentication
app.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        if (!username || !password) {
            return res.status(400).json({ message: 'Invalid username or password' })
        }
        const user = users.find((u) => u.username === username && u.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // secret can be found in .env
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET, {
            expiresIn: '30m',
        });
        console.log(token)
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).send({
            "error": error
        })
    }

});

// error logger
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
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