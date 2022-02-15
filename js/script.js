allProducts('sixteenGB','memory-cost',300);
allProducts('ssd2','storage-cost',400);
allProducts('ssd3','storage-cost', 500);
allProducts('paid-delivery','delivery-cost', 20);

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


const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click',function(){
        const code = document.getElementById('promo-input').value;
        if(code === fakeCode){
           const total= document.getElementById('total-price');
           let totalCost = parseFloat(total.innerText);

           discountPrice = totalCost/20;
           totalPrice = totalCost - discountPrice;
           total.innerText = discountPrice;

        }
    });


 