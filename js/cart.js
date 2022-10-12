let arrayBuy = []
let tableProducts = document.getElementById("tableProducts")
let extra = document.getElementById("extra")

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            //console.log(resultObj.data)
            
            
            
        }
        
    });



 
    
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            arrayBuy = resultObj.data.articles
            console.log(arrayBuy)
            showProductsCart()
            
            
            
        }
        
    });



 
    
});
{/* <h2 class="alert-heading">Carrito de compras</h2>
           <table style="width:100%">
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              
            </tr>
            <tr>
              <td>***</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            
          </table> */}


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
                    <td value="${product.unitCost} id="${product.id + 2}">${product.currency +" "+ product.unitCost}</td>
                    <td><input type="number" id="${product.id + 1}" value="${product.count}" min="1" max="100" onclick="fruta(${product.id})"></td>
                    <td id="${product.id}"">${product.unitCost}</td>
                    `
                    cost = product.unitCost
                
            } else {
                html1+=
               `<td><img src="${product.image}" width="50" height="50"></td>
                <td>${product.name}</td>
                <td>${product.currency +" "+ product.unitCost}</td>
                <td><input type="number" value="${product.count}" min="1" max="10"></td>
                <td>${product.unitCost}</td>
                `
                
            }
    }
    html1 += `  </tr>      
            </table>
            <br>`
    tableProducts.innerHTML += html1
   

}
function fruta(n){
    
    let costF = document.getElementById(n)
    let costI = document.getElementById(n + 1).value 
    costF.innerHTML = costI * cost

}


