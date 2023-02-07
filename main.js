const form = document.getElementById("form-comparative");

function compareNumbers(number1, number2) {
    return number2 > number1;
}

form.addEventListener('submit', function(e){
    let formValid = false;
    e.preventDefault();

    let numberA = parseFloat(document.getElementById("number-a").value);
    let numberB = parseFloat(document.getElementById("number-b").value);

    formValid = compareNumbers(numberA, numberB);

    if (formValid) {
        const containerMsg = document.querySelector('.success');
        containerMsg.style.display = 'block';
    
        numberA = "";
        numberB = "";
    } else {
        const containerMsg = document.querySelector('.error');
        containerMsg.style.display = 'block';
    
        numberA = "";
        numberB = "";
    }
})
