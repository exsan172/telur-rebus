require('dotenv').config()

const express = require('express')
const path    = require('path');
const morgan  = require('morgan')
const app     = express()
const port    = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './src')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(port, () => console.log(`App is live on port ${port}!`))