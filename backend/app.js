const express = require('express');
const cors = require('cors');

port = 8080
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ msg: "welcome" })
})

// error 404
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
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