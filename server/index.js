const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log('listening to port ', PORT)
})