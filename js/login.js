const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location.href = "index.html"
})


