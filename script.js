const calculatorOutput = document.getElementById("calculatorOutput");
const buttons = document.querySelectorAll("button");

let calculationValues = [];

function calculate(button) {
    let value = button.value;

    if (value == "=") {
        let resString = "";
        for (let i of calculationValues) {
            resString += i;
        }

        let result = eval(resString);
        calculationValues = [result]

        calculatorOutput.textContent = result;

    } else if (value == "AC") {
        calculationValues = [];
        calculatorOutput.textContent = "0";
    } else {
        let lastIndex = calculationValues.length - 1

        if (calculationValues[lastIndex] == "+" || calculationValues[lastIndex] == "-" || calculationValues[lastIndex] == "*" || calculationValues[lastIndex] == "/") {

            if (value == "+" || value == "-" || value == "*" || value == "/") {
                calculationValues[lastIndex] = value
                calculatorOutput.textContent = calculationValues.join("");
            } else {
                calculationValues.push(value)
                calculatorOutput.textContent = calculationValues.join("");
            }
        } else {
            calculationValues.push(value)
            calculatorOutput.textContent = calculationValues.join("");
        }
    }
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)))