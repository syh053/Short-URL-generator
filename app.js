const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.redirect('/url')
})

app.get('/url', (req, res) => {
    res.send('This is short URL generator.')
})

app.get('/url/:id', (req, res) => {
    id = req.params.id
    res.send(`The number you entered is ${id}`)
})  


app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port}`)
})