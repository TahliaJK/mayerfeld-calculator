"use strict";

// Basic arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}


// Performs the selected mathematical operation.
function operate(operator, a, b) {

    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);

        default:
            return null;
    }
}


// Displays an error and resets the pending operation.
function showCalculationError() {

    calculatorState.displayValue = "Nice try! \n Can't divide by zero!";
    calculatorState.firstOperand = null;
    calculatorState.operator = null;
    calculatorState.phase = "error";

}


// Handles operator selection and chained calculations.
function selectOperator(operator) {

    if (!["+", "-", "*", "/"].includes(operator)) {
        return;
    }

    if (calculatorState.phase === "error") {
        return;
    }

    if (calculatorState.phase === "operator") {
        calculatorState.operator = operator;
        return;
    }

    const currentNumber = Number(calculatorState.displayValue);

    if (!Number.isFinite(currentNumber)) {
        return;
    }

    if (calculatorState.firstOperand !== null &&
        calculatorState.operator !== null &&
        calculatorState.phase === "entry") {

        const result = operate(
            calculatorState.operator,
            calculatorState.firstOperand,
            currentNumber
        );

        if (result === null || !Number.isFinite(result)) {
            showCalculationError();
            return;
        }

        calculatorState.displayValue = formatResult(result);
        calculatorState.firstOperand = result;

    } else {

        calculatorState.firstOperand = currentNumber;
    }

    calculatorState.operator = operator;
    calculatorState.phase = "operator";

    
}


// Calculates the result when equals is pressed.
function calculate() {

    if (calculatorState.phase !== "entry" ||
        calculatorState.firstOperand === null ||
        calculatorState.operator === null) {
        return;
    }

    const secondOperand = Number(calculatorState.displayValue);

    const result = operate(
        calculatorState.operator,
        calculatorState.firstOperand,
        secondOperand
    );

    if (result === null || !Number.isFinite(result)) {
        showCalculationError();
        return;
    }

    calculatorState.displayValue = formatResult(result);
    calculatorState.firstOperand = null;
    calculatorState.operator = null;
    calculatorState.phase = "result";

    
}


// Keeps compatibility with Tahlia's current controls.js.
function calculateResult() {
    calculate();
}


// Highlights the selected operator button.
function updateOperatorButtons() {

    const buttons = document.querySelectorAll(
        ".operator-buttons [data-operator]"
    );

    buttons.forEach(function(button) {

        const isSelected =
            calculatorState.phase === "operator" &&
            calculatorState.operator === button.dataset.operator;

        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));

    });
}