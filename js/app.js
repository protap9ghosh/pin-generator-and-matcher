function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click", function() {
    const pin = getPin();
    
    const displayPinField = document.getElementById("display-pin");
    displayPinField.style.fontSize = "30px";
    displayPinField.value = pin;
})

document.getElementById("calculator").addEventListener("click", function(event) {
    const clickNumber = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(clickNumber)) {
        if(clickNumber === "C") {
            typedNumberField.value = "";
        }
        else if(clickNumber === "<") {
            const digits = previousTypedNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + clickNumber;
        typedNumberField.style.fontSize = "30px";
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById("verify-pin").addEventListener("click", function() {
    const displayPin = document.getElementById("display-pin");
    const currentDisplayPin = displayPin.value;

    const typedNumberPin = document.getElementById("typed-numbers");
    const currentTypedNumberPin = typedNumberPin.value;

    const pinSuccessMessage = document.getElementById("success-pin");
    const pinWrongMessage = document.getElementById("wrong-pin");

    if(currentDisplayPin === currentTypedNumberPin) {
        pinSuccessMessage.style.display = "block";
        pinWrongMessage.style.display = "none";
    }
    else {
        pinWrongMessage.style.display = "block";
        pinSuccessMessage.style.display = "none";
    }
})