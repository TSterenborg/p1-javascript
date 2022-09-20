function calculate(num1, num2) {
    return num1 + num2
}

function multiplyByFive(num1) {
    return num1 * 5
}

function checkInput(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function calculateMinutes(num1) {
    return num1 / 60
}

console.log(calculate(5,7))
console.log(multiplyByFive(5))
console.log(checkInput(3,7))
console.log(calculateMinutes(3600))