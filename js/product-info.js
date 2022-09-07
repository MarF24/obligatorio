document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("idProductInfo") + EXT_TYPE).then(function(resultObj){
        console.log(resultObj)
        if (resultObj.status === "ok"){
            
         
            
            
        }
        
    });



 
    
});




