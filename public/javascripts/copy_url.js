const copyButton = document.querySelector(".btn")
const url  = document.querySelector(".fs-3.mt-3").innerHTML


copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(url).then( () => {
        alert('網址已複製到剪貼板');
    }).catch(function (err) {
        console.error('複製失敗：', err);
    })
})