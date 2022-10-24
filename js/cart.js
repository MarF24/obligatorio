let arrayBuy = []
let tableProducts = document.getElementById("tableProducts")
let extra = document.getElementById("extra")

// document.addEventListener("DOMContentLoaded", function(e){
//     getJSONData(CART_BUY_URL).then(function(resultObj){
//         if (resultObj.status === "ok"){
            
//             console.log(resultObj.data)
            
            
            
//         }
        
//     });



 
    
// });

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            arrayBuy = resultObj.data.articles
            console.log(arrayBuy)
            pushItems()
            showProductsCart()
            
            
            
            
        }
        
    });



 
    
});


function showProductsCart() {
    
    let html1 = ``
    for (let i = 0; i < arrayBuy.length; i++) {
        let product = arrayBuy[i];
        
            if (i==0) {
                html1 +=
                `<h2 class="alert-heading">Carrito de compras</h2>
                    <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Costo</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    
                    </tr>
                    <tr>
                    <td><img src="${product.image}" width="50" height="50"></td>
                    <td>${product.name}</td>
                    <td>${product.currency +" "+ product.unitCost}</td>
                    <td><input type="number" id="${product.unitCost + 1}" value="${product.count}" min="1" max="10" onclick="fruta(${product.unitCost},${product.currency})"></td>
                    <td id="${product.unitCost}"">${product.currency + " " + product.unitCost}</td>
                    </tr>
                    `
                    
                
            } else {
                html1+=
               `<tr>
               <td><img src="${product.images[2]}" width="50" height="50"></td>
               <td>${product.name}</td>
               <td>${product.currency +" "+ product.cost}</td>
               <td><input type="number" id="${product.cost + 1}" value="1" min="1" max="10" onclick="fruta(${product.cost}, ${product.currency})"></td>
               <td id="${product.cost}""> ${product.currency} ${product.cost}</td><br>
               </tr>
                `
                
            }
    }
    html1 += `  </tr>      
            </table>
            <br>`
    tableProducts.innerHTML += html1

    
   

}

let USD = "USD"
let UYU = "UYU"

function fruta(n,e){
    
    let costF = document.getElementById(n)
    let costI = document.getElementById(n + 1).value
    console.log(n)    
    costF.innerHTML = e  + " " + costI * n

    

}



console.log(JSON.parse(localStorage.getItem("Obj")))

function pushItems(){
    arrayBuy.push(JSON.parse(localStorage.getItem("Obj")))
    arrayBuy.push(JSON.parse(localStorage.getItem("Obj")))
}

