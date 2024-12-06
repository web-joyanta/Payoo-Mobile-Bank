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