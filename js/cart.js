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
    priceUpdate()
}

// html, subTotal shipment total
let placePrice = document.getElementById("finalPrice")
let subtotalPlace = document.getElementById("subtotal2")
let shipmentPlace = document.getElementById("shipment")



// btns shipments, events
let premium = document.getElementById("Premium")
let standard = document.getElementById("Standard")
let express = document.getElementById("Express")

premium.addEventListener("change", function(e){
            priceUpdate()
        })
standard.addEventListener("change", function(e){
            priceUpdate()
        })
express.addEventListener("change", function(e){
            priceUpdate()
        })


// ERROR idk
// let ArrayInputs = { premium, standard , express}
//     for(const btn of ArrayInputs){
//         btn.addEventListener("onchange", function(e){
//             priceUpdate()
//         })
//     }
    

//  function final price + price update
function fruta(n, e) {
    let costF = document.getElementById(n);
    let costI = document.getElementById(n + 1).value;

    costF.innerHTML = e + " " + costI * n;
    
    // for subtotal
    priceUpdate()
    console.log(arrayBuy)
    
  
}
// function price unid*countUnid + shipment
function priceUpdate() {
    
    for (const item of arrayBuy){
        let inputCount = document.getElementById(item.cost + 1).value
        priceUnidadInput = (item.cost * inputCount)
        let shipmentPrice = 0
        let subtotal = item.cost // uniprice
        // shimpent
        if (premium.checked) {
             priceUnidadInput  =  priceUnidadInput * 1.15
             shipmentPrice = priceUnidadInput * 0.15
         
        } else if (standard.checked) {
             priceUnidadInput =  priceUnidadInput * 1.07
             shipmentPrice = priceUnidadInput * 0.07
         
        } else if (express.checked) {
             priceUnidadInput = priceUnidadInput * 1.05
             shipmentPrice = priceUnidadInput * 0.05
         
        } else if (item.currency = UYU) {
            priceUnidadInput = priceUnidadInput / 42
            shipmentPrice = shipmentPrice / 42
            subtotal = item.cost / 42
            console.log(item.currency)

        }
         subtotalPlace.innerHTML = `USD `+ Math.round(item.cost * inputCount)
         shipmentPlace.innerHTML = `USD `+ Math.round(shipmentPrice)
         placePrice.innerHTML = `USD `+ Math.round(priceUnidadInput)
         console.log(item.cost, document.getElementById(item.cost + 1).value)
     }
     

}
// delete cart items
function deleteItem(idItem, iItem){
    document.getElementById(idItem).remove();
    arrayBuy.splice(iItem, 1)
    localStorage.removeItem("cart_key")
    localStorage.setItem("cart_key", JSON.stringify(arrayBuy))
    if (arrayBuy = []) {
        subtotalPlace.innerHTML = 0
        shipmentPlace.innerHTML = 0
        placePrice.innerHTML = 0

    }
}


//disable btns

function disableBtn(any) {
     any.disabled = true;
}

function enableBtn(any) {
    any.disabled = false;
}

let creditCardBtn = document.getElementById("creditCard")
let bankTransfBtn = document.getElementById("bankTransf")
let creditCardText = document.getElementById("craditCardText")
let bankTransfText = document.getElementById("bankTransfText")
let btnSubmit = document.getElementById("submit")


creditCardBtn.addEventListener("click", function(e){
    disableBtn(bankTransfText)
    enableBtn(creditCardText)
})

bankTransfBtn.addEventListener("click", function(e){
    disableBtn(creditCardText)
    enableBtn(bankTransfText)
})

// btnSubmit.addEventListener("click", function(e){
//     if (!(creditCardBtn.checked) && !(bankTransfBtn.checked)) {
        
//         e.preventDefault()
        
//     }
     
    
// })



