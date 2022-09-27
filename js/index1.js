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

let emailTest = document.getElementById("nickName") 
let logoutbtn = document.getElementById("logout")
document.addEventListener("DOMContentLoaded", function(e){
    emailTest.innerHTML = localStorage.getItem("nameEmail")
});
logoutbtn.addEventListener("click", function(e){
    localStorage.removeItem("nameEmail")
});

