let currentnumber = 0

function add() {
    let inputnumbercheck1 = document.getElementById("num1").value
    let inputnumbercheck2 = document.getElementById("num2").value

    if (Number.isInteger(+inputnumbercheck1) && Number.isInteger(+inputnumbercheck2)) {
        if (inputnumbercheck1 > 0 && inputnumbercheck2 > 0) {
            currentnumber = +inputnumbercheck1 + +inputnumbercheck2
            document.getElementById("result").innerHTML = "Resultaat: " + currentnumber
        } else {
            document.getElementById("result").innerHTML = "Resultaat: Getal te laag"
        }
    }
}


function minus() {
    let inputnumbercheck1 = document.getElementById("num1").value
    let inputnumbercheck2 = document.getElementById("num2").value

    if (Number.isInteger(+inputnumbercheck1) && Number.isInteger(+inputnumbercheck2)) {
        if (inputnumbercheck1 > 0 && inputnumbercheck2 > 0) {
            currentnumber = inputnumbercheck1 - inputnumbercheck2
            document.getElementById("result").innerHTML = "Resultaat: " + currentnumber
        } else {
            document.getElementById("result").innerHTML = "Resultaat: Getal te laag"
        }
    }
}


function multiply() {
    let inputnumbercheck1 = document.getElementById("num1").value
    let inputnumbercheck2 = document.getElementById("num2").value

    if (Number.isInteger(+inputnumbercheck1) && Number.isInteger(+inputnumbercheck2)) {
        if (inputnumbercheck1 > 0 && inputnumbercheck2 > 0) {
            currentnumber = inputnumbercheck1 * inputnumbercheck2
            document.getElementById("result").innerHTML = "Resultaat: " + currentnumber
        } else {
            document.getElementById("result").innerHTML = "Resultaat: Getal te laag"
        }
    }
}


function devide() {
    let inputnumbercheck1 = document.getElementById("num1").value
    let inputnumbercheck2 = document.getElementById("num2").value

    if (Number.isInteger(+inputnumbercheck1) && Number.isInteger(+inputnumbercheck2)) {
        if (inputnumbercheck1 > 0 && inputnumbercheck2 > 0) {
            currentnumber = inputnumbercheck1 / inputnumbercheck2
            document.getElementById("result").innerHTML = "Resultaat: " + currentnumber
        } else {
            document.getElementById("result").innerHTML = "Resultaat: Getal te laag"
        }
    }
}