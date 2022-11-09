const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("idProductInfo") + EXT_TYPE).then(function(resultObj){
        
        if (resultObj.status === "ok"){   
            currentProductsArray = resultObj.data
            showProductsList()
            console.log(currentProductsArray)
        }
    });
});


function showProductsList(){

    let htmlContentToAppend = "";
    
        let product = currentProductsArray;

            htmlContentToAppend += `
            <div class="product-info login-form">
                <div>
                    <h1> ${product.name} </h1>
                    <div>
                        <input type="button" value="Comprar" id="btnComprar">
                    </div>
                </br>
                </div>
                <div>
                    <h2>Precio</h2>
                        <p> ${product.currency +" " + product.cost}<p>
                    <h2>Descripcion</h2>
                        <p>${product.description}<p>
                    <h2>Categoria</h2>
                        <p>${product.category}<p>
                    <h2>Cantidad Vendidos</h2>
                        <p>${product.soldCount}<p>
                    <h2>Imagenes ilustrativas</h2>
                </div>    
                <div id= ProductImages>
                    <img  style="width: 20rem;" src="${product.images[0]}" > <img style="width: 20rem;" src="${product.images[1]}" > <img  style="width: 20rem;" src="${product.images[2]}" > <img style="width: 20rem;" src="${product.images[3]}">
                </div>
            </div>
            <br></br>
            `

        document.getElementById("container1").innerHTML += htmlContentToAppend;
        setBtnBuy()
};


let CommentsProduct = []

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL+ localStorage.getItem("idProductInfo") + EXT_TYPE).then(function(resultObj){
        // console.log(resultObj)
        if (resultObj.status === "ok"){
            
            CommentsProduct = resultObj.data
            console.log(CommentsProduct)
            showCommentsList()
            showProductsList2()            
        }
  
    });

});


function showCommentsList (){
    
    let htmlComments = " " ;

        let element = CommentsProduct ;
        let text = `<span class="fa fa-star checked"></span>` ;
        let result = text.repeat(element[0].score);

        for (let i = 0; i < CommentsProduct.length; i++) {
            const element = CommentsProduct[i];
            
            htmlComments += 
            `<div class="list-group-item">
                <div class="d-flex flex-row">
                    <b>${element.user}</b> 
                    <p class="mx-1">- ${element.dateTime} -</p> 
                    <div id="startsPlace">${setStarts(element.score)}</div>
                </div>
                <p>${element.description}</p>
            </div>`;
        }
        document.getElementById("comments").innerHTML = htmlComments

        
};


let inputText = document.getElementById("inputText") ;
let stars = document.getElementById("starts") ;
let btnSend = document.getElementById("btnSend");
let newComments = [] ;


btnSend.addEventListener("click", function(e){
    console.log(inputText.value)
    let commentTest = {
        user : localStorage.getItem("nameEmail"), 
        dateTime: (new Date()).toDateString(),
        score: stars.value ,
        description : inputText.value
    }
    CommentsProduct.push(commentTest)
    showCommentsList()
    
});

function setStarts(n){

    let text1 = `<span class="fa fa-star checked"></span>`;
    let starBlack = `<span class="fa fa-star"></span>`;
    // let result = text.repeat(element[0].score);
    if (n == 5 ) {
        return text1.repeat(n);
        
        
    } else {
        return text1.repeat(n) +  starBlack.repeat(5-n); 
        
    }
    
};

function showProductsList2(){

    let htmlContentToAppend2 = "";
    document.getElementById("sameProducts").innerHTML = htmlContentToAppend2
    
    for(let i = 0; i < currentProductsArray.relatedProducts.length; i++){
        let productSame = currentProductsArray.relatedProducts[i];
            
            if (i==0) { htmlContentToAppend2 += 
                `<div class="carousel-item active">
                    <img src="${productSame.image}" class="d-block w-100"  onClick={productClick(${productSame.id})}>
                </div>`
                
            } else { htmlContentToAppend2 +=
                `<div class="carousel-item">
                    <img src="${productSame.image}" class="d-block w-100" onClick={productClick(${productSame.id})}>
                </div>`
                
            }
        document.getElementById("sameProducts").innerHTML = htmlContentToAppend2;
    }
    
};

function productClick(id) {
    localStorage.setItem("idProductInfo", id)
    window.location.href = "product-info.html"
  };

let emailTest = document.getElementById("nickName") 
let logoutbtn = document.getElementById("logout")

document.addEventListener("DOMContentLoaded", function(e){
    emailTest.innerHTML = localStorage.getItem("nameEmail")
});

logoutbtn.addEventListener("click", function(e){
    localStorage.removeItem("nameEmail")
    document.getElementById("logout1").remove()
});

function setBtnBuy(){
    let btnComprar = document.getElementById("btnComprar")
    btnComprar.addEventListener("click", function(e){

        pushToLocalCart(currentProductsArray)
        
        window.location.href = "cart.html"
    })

}

function pushToLocalCart(item) {
    const cartJson = localStorage.getItem("cart_key")
    let cart = []
    if (cartJson) cart = JSON.parse(cartJson) 

    cart.push(item)

    localStorage.setItem("cart_key", JSON.stringify(cart))
}

if (!localStorage.getItem("nameEmail")){
    location.href ="index.html";
   }

