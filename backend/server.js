const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/short', (req, res) => {
    res.send('Hello from short')
})

app.listen(process.env.PUBLIC_POST, () => {
    console.log('Server started')
})