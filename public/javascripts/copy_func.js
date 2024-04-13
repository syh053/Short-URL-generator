const button = document.querySelector("btn")
button.addEventListener("click", () => {
    console.log("click success")
    navigator.clipboard.writeText(shortURL)
})