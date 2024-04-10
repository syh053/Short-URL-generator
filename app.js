const express = require('express')
const app = express()
const port = 3000
datas = require("./public/jsons/data.json").test


app.use(express.static("public"))


app.get('/', (req, res) => {
    res.redirect('/url')
})

app.get('/url', (req, res) => {
    res.send(`This is short URL generator. ${datas}`)
})

app.get('/url/:id', (req, res) => {
    id = req.params.id
    res.send(`The number you entered is ${id}`)
})  


app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port}`)
})