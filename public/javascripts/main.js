//檢查 input 是否有值
if (values.includes(inputURL)) {
    data = Object.keys(datas).find(key => datas[key] === inputURL)
    shortURL = localURL + data
    res.render('address', { inputURL, shortURL })
    console.log("有值")
    console.log(datas)
} else if (!values.includes(inputURL)) {
    const { shortURL, result } = randomString(5)
    datas[result] = inputURL
    res.render('address', { inputURL, shortURL })
    console.log("沒值")
    console.log(datas)
} else {
    console.log(datas)
    res.render('index')
}

console.log("123 hi")