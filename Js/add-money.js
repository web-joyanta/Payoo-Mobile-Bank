document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;
    if(pinNumber === '1234'){
        const balance = document.getElementById('balance-amount').innerText;
        const balanceNumber = parseFloat(balance);
        const addMoneyNumber = parseFloat(addMoneyInput);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('balance-amount').innerText = newBalance;
    }else{
        alert('Failed to add money ? please try again.');
    }

})