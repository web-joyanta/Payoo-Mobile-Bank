function getInputFieldValueById(inputId){
    const inputValue = document.getElementById(inputId).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValueById(textId){
    const textValue = document.getElementById(textId).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showSectionById(id){
    document.getElementById('form-add-money').classList.add('hidden');
    document.getElementById('form-cash-out').classList.add('hidden');
    document.getElementById('form-transaction-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}