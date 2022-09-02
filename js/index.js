const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    emailvalue = document.getElementById("name").value
    setEmailName()
    window.location.href = "index1.html"

})

function setEmailName() {
    localStorage.setItem("nameEmail", emailvalue);
        // window.location = "index1.html"
}

let emailvalue = document.getElementById("name").value
    






// function onSignIn (googleData){
//     window.location.href = "index1.html"
//     console.log("TestGoogle")
// }


