const money = {
    dollar: 0.84,
    euro: 1,
    livre: 1.14,
    bitcoin: 40000
}

let buttonFromClicked = 0
let buttonToClicked = 0

let buttonFromValue = 0
let buttonToValue = 0

let convertedValue = 0

let input = document.getElementById("entry")


function convertir() {
    console.log("-------------" + money[buttonFromValue] + money[buttonFromValue] + input.value + "-------------")
    if ((buttonFromValue != 0) && (buttonToValue != 0) && (input.value != "")) {
        console.log("++++++++++")
        quantité = input.value
        convertedValue = (money[buttonFromValue] * quantité) / money[buttonToValue]
        document.getElementById("result").value = convertedValue;
    }
}

function changeFromButtonColor(button) {
    if (button == buttonFromClicked) {
        button.style.background = "gray"
    } else if (buttonFromClicked == 0) {
        button.style.background = "rgb(0, 94, 0)"
    }
    else {
        buttonFromClicked.style.background = "gray"
        button.style.background = "rgb(0, 94, 0)"
    }
    buttonFromClicked = button
    buttonFromValue = buttonFromClicked.dataset.devise
    convertir()
}

function changeToButtonColor(button) {
    if (button == buttonToClicked) {
        button.style.background = "gray"
    } else if (buttonToClicked == 0) {
        button.style.background = "rgb(0, 94, 0)"
    }
    else {
        buttonToClicked.style.background = "gray"
        button.style.background = "rgb(0, 94, 0)"
    }
    buttonToClicked = button
    buttonToValue = buttonToClicked.dataset.devise
    convertir()
}

document.addEventListener("DOMContentLoaded", function() {
    input.addEventListener('input', function() {
        convertir()
    })
})