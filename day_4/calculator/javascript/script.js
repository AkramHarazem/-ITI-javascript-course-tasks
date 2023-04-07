var answerInp = document.getElementById('Answer')
var currentValue = 0
var lastOperator = ""
var isempty = true

function EnterNumber(val) {
    if (isempty) {
        answerInp.value += val
    } else if (isempty && operator == "-" ){
        answerInp.value += val
    }
    else {
        answerInp.value = ""
        answerInp.value = val
        isempty = true
    }
}

function EnterOperator(operator) {
    if (answerInp.value !== "") {
        if (lastOperator !== "" && operator == lastOperator) {
            currentValue = calc(lastOperator, currentValue, parseFloat(answerInp.value))
            answerInp.value = currentValue
        } else if (operator !== lastOperator){
            currentValue = calc(operator, currentValue, parseFloat(answerInp.value))

        }
        else{
            currentValue = parseFloat(answerInp.value)
        }
        lastOperator = operator
        isempty =false
    } else if (answerInp.value == "" && operator == "-"){
        answerInp.value = operator
    }
}

function EnterEqual() {
    if (lastOperator !== "" && answerInp.value !== currentValue) {
        currentValue = calc(lastOperator, currentValue, parseFloat(answerInp.value))
        answerInp.value = currentValue
    } else {
        currentValue = parseFloat(answerInp.value)
    }
    lastOperator = ""
    isempty =false
}

function calc(operator, val1, val2) {

    switch (operator) {
        case "+":
            return val1 + val2
        case "-":
            return val1 - val2
        case "*":
            return val1 * val2
        case "/":
            if (val2 == 0){
               return ("can't divide by zero")
            }else {
                return val1 / val2
            }
        default:
            return val1
    }
}

function EnterClear() {
    answerInp.value = ""
    lastOperator = ""
    currentValue = 0
}



