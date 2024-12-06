document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('add-money-input');
    const pinNumber = getInputFieldValueById('pin-number-input');
    if(isNaN(addMoney)){
        alert('failed to add money');
        return;
    }
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('balance-amount');
        const newBalance = balance + addMoney
        document.getElementById('balance-amount').innerText = newBalance;
        // Transaction History
        const p = document.createElement('p');
        p.innerText = `Add Money: ${addMoney}TK. Balance: ${newBalance}TK.`
        p.classList.add('text-emerald-400');
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('wrong input');
    }
})