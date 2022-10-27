// let arrayBuy = []
let tableProducts = document.getElementById("tableProducts");
let extra = document.getElementById("extra");
let USD = "USD";
let UYU = "UYU";

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            // arrayBuy = resultObj.data.articles;
            arrayBuy = []
            
            for (const item of getCartItems()) arrayBuy.push(item);
            
            console.log(arrayBuy)

            showProductsCart();
            
            console.log(window.localStorage)
        }
    });
});

//#region Cart

function getCartItems() {
    const cartJson = localStorage.getItem("cart_key");
    if (!cartJson) return [];
    return JSON.parse(cartJson);
}

//#endregion

function showProductsCart() {
    let html1 = `
<h2 class="alert-heading">Carrito de compras</h2>
<hr>
                    <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Costo</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    
                    </tr>

    `;
    for (let i = 0; i < arrayBuy.length; i++) {
        let product = arrayBuy[i];

        const image = product.image ?? product.images[0];
        const cost = product.unitCost ?? product.cost;
        const count = product.count ?? 1;

        html1 += `  <tr id=${product.id}>
                    <td><img src="${image}" width="50" height="50"></td>
                    <td>${product.name}</td>
                    <td>${product.currency + " " + cost}</td>
                    <td><input type="number" id="${cost + 1}" value="${count}" min="1" max="10" onclick="fruta(${cost},${product.currency})"></td>
                   
                    <td id="${cost}"">${product.currency + " " + cost}</td>
                    <td><button onClick="deleteItem(${product.id}, ${i})" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top"><i class="fa fa-trash"></i></button><td>
                    </tr>
                    `;
    }
    html1 += `  </tr>      
            </table>
            <hr>
            <br>`;
    tableProducts.innerHTML += html1;
}
let contador = 0
let placePrice = document.getElementById("TestPrice")
function fruta(n, e) {
    let costF = document.getElementById(n);
    let costI = document.getElementById(n + 1).value;

    // console.log(n, e);
    costF.innerHTML = e + " " + costI * n;
    
    for (const item of arrayBuy){
       
        
        let inputCount = document.getElementById(item.cost + 1).value
        priceUnidadInput = (item.cost * inputCount) 
        contador = priceUnidadInput
        

        
        placePrice.innerHTML = contador

        

        console.log(item.cost, document.getElementById(item.cost + 1).value)
    }
    
}

function deleteItem(idItem, iItem){
    document.getElementById(idItem).remove();
    arrayBuy.splice(iItem, 1)
    localStorage.removeItem("cart_key")
    localStorage.setItem("cart_key", JSON.stringify(arrayBuy))   
}

// function test2() {
    
    
//     for (const item of arrayBuy){
        

//         console.log(item.cost, costI)
//     }
// }

