"use strict";

const displayElement = document.querySelector("#display");

const decimalButtonElement =
    document.querySelector('[data-action="decimal"]');

function updateDisplay() {
    displayElement.textContent = calculatorState.displayValue;
};

function prepareNumberEntry() {
    const state = calculatorState;

    if (state.phase === "entry") {
        return;
    }

    if (state.phase === "result" || state.phase === "error") {
        state.firstOperand = null;
        state.operator = null;
    }

    state.displayValue = "0";
    state.phase = "entry";
};

function inputDigit(digit) {
    if (!/^[0-9]$/.test(digit)) {
        return;
    }

    prepareNumberEntry();

    const state = calculatorState;

    if (state.displayValue.length >= 12) {
        return;
    }

    if (state.displayValue === "0") {
        state.displayValue = digit;
    } else {
        state.displayValue += digit;
    }
};

function inputDecimal() {
    prepareNumberEntry();

    const state = calculatorState;

    if (
        state.displayValue.includes(".") ||
        state.displayValue.length >= 12
    ) {
        return;
    }

    state.displayValue += ".";
};

function updateDecimalButton() {
    const state = calculatorState;

    decimalButtonElement.disabled =
        state.phase === "entry" &&
        (
            state.displayValue.includes(".") ||
            state.displayValue.length >= 12
        );
};