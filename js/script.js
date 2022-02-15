

function allProducts(itemName,itemId,price){
    document.getElementById(itemName).addEventListener('click',function(){
        addItems(itemId,price)
    });
}