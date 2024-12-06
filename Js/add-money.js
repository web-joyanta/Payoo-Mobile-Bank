document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('add-money-input');
    const pinNumber = getInputFieldValueById('pin-number-input');
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('balance-amount');
        const newBalance = balance + addMoney
        document.getElementById('balance-amount').innerText = newBalance;
    }else{
        alert('wrong input');
    }
})