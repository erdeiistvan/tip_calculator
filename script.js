var domElements = {
billAmount : document.querySelector('#bill-amount'),
service : document.querySelector('#service'),
numberOfPeople : document.querySelector('#number-of-people'),
calcBtn : document.querySelector('#calc-btn'),
tipAmount : document.querySelector('#tip-amount')
};

function calcTip() {
    return (parseInt(domElements.billAmount.value) * parseFloat(domElements.service.value)) / parseInt(domElements.numberOfPeople.value);
};

domElements.calcBtn.addEventListener('click', function(){
    
    if(domElements.billAmount.value !=="" && domElements.service.value !=="" && domElements.numberOfPeople.value !=="") { 
    
    calcTip();
    domElements.tipAmount.innerHTML = "Tip amount $" + calcTip().toFixed(2) + " each.";
    
    } else {
    alert('Please, add all the inputs!');                              
    }
    
});
