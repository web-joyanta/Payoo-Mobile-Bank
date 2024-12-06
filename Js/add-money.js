document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('add-money-input');
    const pinNumber = getInputFieldValueById('pin-number-input');
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('balance-amount');
        const newBalance = balance + addMoney
        document.getElementById('balance-amount').innerText = newBalance;
        // Transaction History
        const p = document.createElement('p');
        p.innerText = `Add Money: ${addMoney} TK. Balance: ${newBalance} TK.`
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('wrong input');
    }
})