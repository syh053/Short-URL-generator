const express = require('express')
const {engine} = require('express-handlebars')
const fs = require('fs')
const app = express()
const port = 3000
const localURL = "http://localhost:3000/url/"


const path = "./public/jsons/data.json"
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

    // 將修改後的對象轉換成字符串並寫回檔案
    fs.writeFile(path, JSON.stringify(datas, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('寫入檔案失敗：', err);
            return;
            }
        console.log('檔案已成功更新');
    }) 
})


app.get('/url/:id', (req, res) => {
    id = req.params.id

    // const keys = Object.keys(datas)  (X) 較不佳的寫法
    //陣列的include方式是一個一個查找，當資料量越大時，這個搜尋就會越耗能，
    // 直接用datas[id]看是否有存在的值即可，物件的object是幾乎是瞬間的直接取得，像是直接從一群人中直接點名。

    if (datas[id]) {  
        res.redirect(datas[id])
    } else {
        res.send("輸入的網址無效，請重返上一頁。")
    }
})  


app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port}`)
})