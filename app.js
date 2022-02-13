function randomNumberGenerator() {
    const number = Math.round(Math.random() * 10000);
    const checkNumber = number + '';
    if (checkNumber.length == 4) {
        return number;
    }
    else {
        return randomNumberGenerator();
    }  
}

function generatePin() {
    const randNumber = randomNumberGenerator();
    document.getElementById('random-input').value = randNumber;
}

document.getElementById('random-button').addEventListener('click', function () {
    // const randNumber = randomNumberGenerator();
    // document.getElementById('random-input').value = randNumber;
    generatePin();
});

document.getElementById('keypad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        else if (number == '<') {
            let test = calcInput.value;
            calcInput.value = test.substring(0, test.length - 1);  
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('random-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');

    if (pin == typedNumbers) {
        success.style.display = 'block';
        failed.style.display = 'none';
    }
    else {
        failed.style.display = 'block';
        success.style.display = 'none';
    }
}












