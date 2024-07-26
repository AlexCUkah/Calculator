function add (n, n2){
    return n + n2
}

function subtract (n, n2) {
    return n - n2
}

function divide(n, n2){
    return n / n2
}

function multiply(n, n2){
    return n * n2
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button")
    const display = document.getElementById("calculator-display")

    let currentInput = ""
    let previousInput = null
    let operator = null

    const operation = {
        "+": add,
        "-": subtract,
        "/": divide,
        "*": multiply,
    }

    const displayInput = (value) => {
        display.value = value
    }

    const getInput = (number) => {
        currentInput += number
        displayInput(currentInput)
    }

    const handleOperation = () => {
        if(previousInput !== null && operator !== null){
            const num1 = parseFloat(previousInput)
            const num2 = parseFloat(currentInput)
            let result = operator(num1,num2)
            displayInput(result.toString())
            currentInput = ""
            previousInput = result
            operator = null
        }
        else{
            previousInput = currentInput
            currentInput = ""
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.textContent
            if(!isNaN(parseFloat(value)) || value === "."){
                getInput(value)
            }
            else if(value in operation){
                operator = operation[value]
                displayInput(value)
                if(operator !== null && currentInput !== ""){
                    handleOperation()
                }
            }    else if (value === "=") {
                    handleOperation();
                }





        })
    })

})