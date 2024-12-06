document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('cash-out-input');
    const pinNumber = getInputFieldValueById('pin-cash-out-input');
    if(isNaN(cashOut)){
        alert('failed to cash out');
        return;
    }
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('balance-amount');
        if(cashOut > balance){
            alert('Low Balance');
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('balance-amount').innerText = newBalance;
        // Transaction History
        const p = document.createElement('p');
        p.innerText = `Cash Out: ${cashOut}TK. Balance: ${newBalance}TK.`
        p.classList.add('text-red-400');
        document.getElementById('transaction-container').appendChild(p);
    }
})