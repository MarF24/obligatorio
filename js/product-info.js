const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductsArray = [];

let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("idProductInfo") + EXT_TYPE).then(function(resultObj){
        // console.log(resultObj)
        if (resultObj.status === "ok"){
            
            currentProductsArray = resultObj.data
            
            
            
            showProductsList()
            console.log(currentProductsArray)


            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
            // setTitleProduct(resultObj.data.catName)
        
            
        
            
            
            
        }

    });



 

});


function showProductsList(){

    // let imagesToAppend = "" ;
    // let ImagesOfProducts = currentProductsArray.images ;
    // for (let i = 0; i < ImagesOfProducts.length; i++) {
    //     let ImagesP = ImagesOfProducts[i];
        
    //     imagesToAppend += "<img src=" + ImagesP + ">" ;
        
    // }
   
        
        
    // }

    let htmlContentToAppend = "";
    
    
    
        let product = currentProductsArray;

        

            htmlContentToAppend += `
            <div class="product-info login-form">
                <div>
                    <h1> ${product.name} </h1>
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
        
    
    console.log()
}


let CommentsProduct = []

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL+ localStorage.getItem("idProductInfo") + EXT_TYPE).then(function(resultObj){
        // console.log(resultObj)
        if (resultObj.status === "ok"){
            
            CommentsProduct = resultObj.data
            console.log(CommentsProduct)
            showCommentsList()
                        
        
        
            
        
            
            
            
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
                <b>${element.user}</b> 
                <p>- ${element.dateTime} - 
                <div id="startsPlace">${text.repeat(element.score)}<div> </p>
                <p>${element.description}</p>
             </div>` ;

            
        
        
        
        }
        document.getElementById("comments").innerHTML += htmlComments
        console.log(htmlComments) 
    
        
        


;}
