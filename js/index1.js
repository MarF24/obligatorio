document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    // localStorage.getItem("nameEmail")
    emailTest.innerHTML = localStorage.getItem("nameEmail")

    // console.log(localStorage.getItem("nameEmail"))
})

let emailTest = document.getElementById("nickName") 

// document.addEventListener("DOMContentLoaded", function(){
//     emailTest.innerHTML = localStorage.getItem("emailNick1")
    
// })

