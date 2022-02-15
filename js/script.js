

function allProducts(itemName,itemId,price){
    document.getElementById(itemName).addEventListener('click',function(){
        addItems(itemId,price)
    });
}

function addItems(itemId,price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;
 
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
 
    const total = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
 
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    
 }
 