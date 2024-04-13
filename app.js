const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
const localURL = "http://localhost:3000/url/"


datas = require("./public/jsons/data.json")

app.use(express.static("public"))


app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')



function randomString(length) {

    let result = ""     //清空 result
    let shortURL = ""   //清空 shortURL

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" //隨機抽取值

    //用 for 迴圈生成亂碼
    for (let i = 0; i < 5; i++) {
        result += characters.charAt( Math.floor(Math.random() * characters.length) )    
    }

    shortURL = localURL + result    //組合短網址

    return {shortURL, result}
}


app.get('/', (req, res) => {
    res.redirect('/url')
})




app.get('/url', (req, res) => {
    
    const inputURL = req.query.creatURL?.trim()
    
    if (inputURL && !Object.values(datas).includes(inputURL) ) {
        const { shortURL, result } = randomString(5)
        datas[result] = inputURL
        res.render("address", { inputURL, shortURL })
    } else if ( Object.values(datas).includes(inputURL) ) {
        const result = Object.keys(datas).find( key => datas[key] === inputURL )
        const shortURL = localURL + result
        res.render("address", { inputURL, shortURL })
    } else {
        res.render("index", { inputURL })
        console.log(datas)
    }
})


app.get('/url/:id', (req, res) => {
    id = req.params.id
    const keys = Object.keys(datas)
    if (keys.includes(id)) {  
        res.redirect(datas[id])
    }
})  


app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port}`)
})