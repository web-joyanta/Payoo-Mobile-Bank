document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('add-money-input');
    const pinNumber = getInputFieldValueById('pin-number-input');
    console.log(addMoney, pinNumber)
})