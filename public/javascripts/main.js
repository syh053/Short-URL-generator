const button = document.querySelector("#input") 
const input = document.querySelector(".form-control") 

button.addEventListener("submit", event => {
    // event.preventDefault()
    if (input.value.trim().length === 0) {
        alert("不得為空值")
    }
    console.log("hihi")
} )