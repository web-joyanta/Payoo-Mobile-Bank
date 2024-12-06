document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('cash-out-input');
    const pinNumber = getInputFieldValueById('pin-cash-out-input');
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('balance-amount');
        const newBalance = balance - cashOut;
        document.getElementById('balance-amount').innerText = newBalance;
    }
})