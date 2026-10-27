"use strict";
// 1. Clear the calculator
function clearCalculator() {
    calculatorState.displayValue = "0";
    calculatorState.firstOperand = null;
    calculatorState.operator = null;
    calculatorState.phase = "entry";

    updateDisplay();
    updateDecimalButton();
}


// 2. Remove the last character
function backspace() {
    if (
        calculatorState.phase === "operator" ||
        calculatorState.phase === "result"
    ) {
        return;
    }

    if (calculatorState.phase === "error") {
        calculatorState.displayValue = "0";
        calculatorState.phase = "entry";
    } else {
        calculatorState.displayValue =
            calculatorState.displayValue.slice(0, -1);

        if (calculatorState.displayValue === "") {
            calculatorState.displayValue = "0";
        }
    }

    updateDisplay();
    updateDecimalButton();
}


// 3. Format a calculation result
function formatResult(value) {
    const answer = value.toPrecision(10);

    // Keep scientific notation as returned by toPrecision().
    if (answer.includes("e")) {
        return answer;
    }

    // Remove unnecessary zeros after the decimal point.
    if (answer.includes(".")) {
        return answer.replace(/0+$/, "").replace(/\.$/, "");
    }

    return answer;
}


// 4. Handle keyboard input
function handleCalculatorKey(event) {
    const key = event.key;
    let handled = true;

    if (/^[0-9]$/.test(key)) {
        inputDigit(key);
    } else if (key === "." || key === ",") {
        inputDecimal();
    } else if (["+", "-", "*", "/"].includes(key)) {
        // PROVISIONAL: confirm this function name with Betim.
        selectOperator(key);
    } else if (key === "Enter" || key === "=") {
        // PROVISIONAL: confirm this function name with Betim.
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearCalculator();
    } else {
        handled = false;
    }

    if (handled) {
        event.preventDefault();
        updateDisplay();
        updateDecimalButton();
    }
}


// 5. Connect buttons and keyboard controls
function setupCalculatorControls() {
    const buttonsContainer =
        document.querySelector("#calculator-buttons");

    // Prevent duplicate event listeners.
    if (buttonsContainer.dataset.controlsReady === "true") {
        return;
    }

    buttonsContainer.dataset.controlsReady = "true";

    buttonsContainer.addEventListener("click", function (event) {
        const button = event.target.closest("button");

        if (!button || !buttonsContainer.contains(button)) {
            return;
        }

        if (button.dataset.digit !== undefined) {
            inputDigit(button.dataset.digit);
        } else if (button.dataset.action === "decimal") {
            inputDecimal();
        } else if (button.dataset.action === "clear") {
            clearCalculator();
        } else if (button.dataset.action === "backspace") {
            backspace();
        } else if (button.dataset.operator !== undefined) {
            // PROVISIONAL: confirm this function name with Betim.
            selectOperator(button.dataset.operator);
        } else if (button.dataset.action === "equals") {
            // PROVISIONAL: confirm this function name with Betim.
            calculateResult();
        } else {
            return;
        }

        updateDisplay();
        updateDecimalButton();
    });

    document.addEventListener("keydown", handleCalculatorKey);

    updateDisplay();
    updateDecimalButton();
}


// Initialise the controls after the HTML has loaded.
setupCalculatorControls();
