// getJSONData (PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then()


const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}






function showProductsList(){

    let htmlContentToAppend = "";
    document.getElementById("product-list-container").innerHTML = htmlContentToAppend
    for(let i = 0; i < currentProductsArrayFilter.length; i++){
        let product = currentProductsArrayFilter[i];

        

            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name + " - " + product.currency + " " +product.cost}</h4>
                            <small class="text-muted">${product.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        

        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentProductsArray = categoriesArray;
    }

    currentProductsArray = sortCategories(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            currentProductsArray = resultObj.data.products
            currentProductsArrayFilter = currentProductsArray
            showProductsList()

            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
            setTitleProduct(resultObj.data.catName)
            
            
            
        }
        
    });



 
    
});




function setTitleProduct (name){
    let TituloP = document.getElementById("tituloProd")
    TituloP.innerHTML += " " + name ;


}



// -------------------Botones para filtrar------------------------

let btnAsc = document.getElementById("asc");
let btnDesc = document.getElementById("desc");
let btnRelevancia = document.getElementById("relevancia");


btnAsc.addEventListener("click", function(e){
    currentProductsArrayFilter.sort((a, b) => {
        if (a.cost > b.cost) {
            return -1;
        } else if (a.cost < b.cost) {
            return 1;
        } else {
            return 0;
        }

        })

        showProductsList()
        
    });

btnDesc.addEventListener("click", function(e){
    currentProductsArrayFilter.sort((a, b) => {
        if (a.cost < b.cost) {
            return -1;
        } else if (a.cost > b.cost) {
            return 1;
        } else {
            return 0;
        }

        })

        showProductsList()
        
    });

btnRelevancia.addEventListener("click", function(e){
    currentProductsArrayFilter.sort((a, b) => {
        if (a.soldCount > b.soldCount) {
            return -1;
        } else if (a.soldCount < b.soldCount) {
            return 1;
        } else {
            return 0;
        }

        })

        showProductsList()
    
    });



let precioMinimo = document.getElementById("precioMin")
let precioMaximo = document.getElementById("precioMax")

let currentProductsArrayFilter = currentProductsArray


precioMinimo.addEventListener("input", function(e) {
    definirMaxMin()
    
});

precioMaximo.addEventListener("input", function(e) {
    definirMaxMin()
});


function definirMaxMin() {
        
        let Min;
        let Max;
    
        if (precioMinimo.value == "" || precioMinimo.value == undefined) {
            Min = -Infinity
            
        } else {
            Min = precioMinimo.value
            
        };
    
        if (precioMaximo.value == "" || precioMaximo.value == undefined) {
            Max = +Infinity
            
        } else {
            Max = precioMaximo.value
            
        };
        
    
        function CostoFiltrado(producto) {
          return  producto.cost >= Min && producto.cost <= Max
        };
    
        currentProductsArrayFilter =currentProductsArray.filter(CostoFiltrado) 


        console.log(currentProductsArrayFilter)
        
        showProductsList()
    
}

document.addEventListener("DOMContentLoaded", function(e){
    // localStorage.getItem("nameEmail")
    emailTest.innerHTML = localStorage.getItem("nameEmail")

    // console.log(localStorage.getItem("nameEmail"))
})

let emailTest = document.getElementById("nickName")








