const memoryButton1 = document.getElementById("memory1")
const memoryButton2 = document.getElementById("memory2")
const storageButton1 = document.getElementById("storage1")
const storageButton2 = document.getElementById("storage2")
const storageButton3 = document.getElementById("storage3")
const deliveryButton1 = document.getElementById("delivery1")
const deliveryButton2 = document.getElementById("delivery2")

const bestPrice = document.getElementById("best-price")
const memoryPrice = document.getElementById("memory-price")
const storagePrice = document.getElementById("storage-price")
const deliveryPrice = document.getElementById("delivery-price")
const totalPrice = document.getElementById("total-price")
const grandTotal = document.getElementById("grand-total")

//buttons
memoryButton1.addEventListener('click',function(){
    extraMemorysPrice(0)
    total ()
})
memoryButton2.addEventListener('click',function(){
    extraMemorysPrice(180)
    total ()
})

storageButton1.addEventListener('click',function(){
    extraStoragesPrice(0);
    total ()
})
storageButton2.addEventListener('click',function(){
    extraStoragesPrice(100);
    total ()
})
storageButton3.addEventListener('click',function(){
    extraStoragesPrice(180);   
    total ()
})

deliveryButton1.addEventListener('click',function(){
    
 deliverysPriceExtra (0);
    total ()
})
deliveryButton2.addEventListener('click',function(){
    deliverysPriceExtra (20);
    total ()
  
})

//button functions
//Extra cost Fot Extra Memory 
function extraMemorysPrice(extra){
    memoryPrice.innerText = Number(extra);
}
//Extra Cost For ExtraStorage 
function extraStoragesPrice(extra){
    storagePrice.innerText = Number(extra);
}

//Extra cost For delivery Price
function deliverysPriceExtra (extra){
    deliveryPrice.innerText = Number(extra);

}


//total er function
function total(){
    const bestPriceCost = Number(bestPrice.innerText)
    const memoryCost = Number(memoryPrice.innerText)
    const storageCost = Number(storagePrice.innerText)
    const deliveryCost = Number(deliveryPrice.innerText)
    const totalCost = bestPriceCost + memoryCost + storageCost + deliveryCost
    totalPrice.innerText = totalCost
    grandTotal.innerText = totalCost
}

///apply button

const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click',function(){
    const inputButton = document.getElementById('input-button')
     const inputButtonText = inputButton.value;
     total();
    if(inputButtonText == 'stevekaku'){
        const totalPriceUpdated = totalPrice.innerText ;
          let discountPrice = totalPriceUpdated - totalPriceUpdated * 0.2;
         grandTotal.innerText = discountPrice
    }
    else{
        const errorMessage = document.getElementById("error-message")
        errorMessage.style.display = "block"    
    }
})

