# Calculator Project

## Overview

This project is a browser-based calculator developed using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic calculations through an interactive interface, using either the calculator buttons or supported keyboard keys.

The team developed the project collaboratively, with each member responsible for a specific set of features. The code is separated into JavaScript files to make the project easier to organise, maintain, test, and integrate.

## Features

- **Number and decimal input:** Enter whole numbers and decimal values.
- **Basic arithmetic:** Perform addition, subtraction, multiplication, and division.
- **Chained calculations:** Perform multiple operations consecutively, evaluating one pair of numbers at a time.
- **Equals button:** Calculate and display the result of an operation.
- **Clear button (C):** Reset the calculator and clear its stored values.
- **Backspace button (⌫):** Remove the last character entered.
- **Keyboard support:** Use supported keyboard keys to enter numbers and perform operations.
- **Result formatting:** Display calculation results clearly and prevent long decimal answers from overflowing the display.
- **Error handling:** Display a friendly error message for invalid calculations, including division by zero.
- **Responsive layout:** Keep the calculator interface usable across different screen sizes.

## Technologies Used

- **HTML5** — Structures the calculator interface and buttons.
- **CSS3** — Styles the calculator and provides responsive layouts.
- **JavaScript** — Handles number input, arithmetic calculations, controls, and keyboard interactions.
- **Git and GitHub** — Support version control, individual branches, code reviews, and collaboration.

## Project Structure

```text
calculator/
├── index.html
├── styles.css
├── shared.js
├── input.js
├── operations.js
├── controls.js
└── README.md
```

### File Responsibilities

| File            | Purpose                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `index.html`    | Contains the calculator's HTML structure and interface elements.                                               |
| `styles.css`    | Contains the calculator styling and responsive layout.                                                         |
| `shared.js`     | Defines the shared calculator state used by the other JavaScript files.                                        |
| `input.js`      | Handles number entry, decimal input, and updating the display.                                                 |
| `operations.js` | Handles arithmetic functions, operator selection, and calculations.                                            |
| `controls.js`   | Handles clear and backspace functionality, keyboard events, result formatting, and event-listener integration. |

## Team Contributions

### Aspa — Number Input and Display

- Implemented number input functionality for digits 0–9.
- Implemented decimal input, allowing users to enter decimal numbers without entering multiple decimal points in the same number.
- Managed the display value during number entry.
- Implemented display updates and error styling.
- Developed the HTML and CSS elements related to the number buttons and main display.
- Tested number entry, decimal handling, and display behaviour.
- Contributed to integrating the number input functionality with the rest of the calculator.

### Betim Bajrami — Arithmetic Operations and Calculations

- Implemented the basic arithmetic functions: addition, subtraction, multiplication, and division.
- Developed the `operate()` function to select and execute the appropriate arithmetic operation.
- Implemented operator selection and the equals functionality.
- Managed the first operand and selected operator during calculations.
- Implemented chained calculations, evaluating one pair of numbers at a time.
- Added error handling for invalid operations, including division by zero.
- Developed the HTML and CSS elements related to the operator and equals buttons.
- Tested arithmetic operations, operator changes, chained calculations, and calculation errors.
- Contributed to integrating the arithmetic functionality with the number input and calculator controls.

### Tahlia — Calculator Controls, Formatting, and Responsive Layout

- Implemented the Clear (`C`) functionality to reset the calculator's display and stored calculation values.
- Implemented Backspace (`⌫`) functionality to remove the last entered character.
- Developed keyboard support for digits, decimals, operators, Enter/equals, Backspace, and Escape.
- Implemented result formatting to limit displayed precision and prevent long answers from overflowing the display.
- Connected the calculator buttons and keyboard events to the appropriate input and arithmetic functions.
- Implemented the event-listener setup to ensure calculator controls are registered once.
- Developed the HTML and CSS elements related to the clear and backspace buttons, page structure, and calculator layout.
- Worked on responsive keypad styling and keyboard-focus states.
- Tested calculator controls, keyboard interactions, clearing and backspacing, result formatting, and overall integration.

## Collaboration and Development

The team divided the calculator into separate feature areas to allow each member to work independently while following a shared agreement.

- Each team member developed and tested their assigned features.
- Shared calculator state was defined in `shared.js` to keep the calculator's data consistent.
- JavaScript functionality was separated into dedicated files to reduce overlap between team members' work.
- The team used Git and GitHub branches to manage individual contributions, review changes, and integrate features.
- The HTML, CSS, and JavaScript were coordinated to ensure that all features worked together as one calculator.

## How to Run the Project

1. Clone or download the project repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Use the on-screen buttons or supported keyboard keys to perform calculations.



##

