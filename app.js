const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
datas = require("./public/jsons/data.json").test

app.use(express.static("public"))


app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')



app.get('/', (req, res) => {
    res.redirect('/url')
})

app.get('/url', (req, res) => {
    res.render('index')
})

app.get('/url/:id', (req, res) => {
    id = req.params.id
    res.send(`The number you entered is ${id}`)
})  


app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port}`)
})