# 🧮 Calculator: The Final Operation

### Three developers. Four operators. One calculator that actually works.

*A collaborative JavaScript calculator built for the Mayerfeld Consulting AI-Assisted Frontend Developer Practicum (October 2026).*

> **CALCULATOR:** Ready for your next calculation.
>
> **USER:** What happens if I divide by zero?
>
> **CALCULATOR:** Let's not make this more complicated than it needs to be.

---

## 🎬 The challenge

Every developer eventually faces a problem that looks simple on the surface but becomes more complicated with every new requirement.

Our mission was to build a functional calculator using HTML, CSS, and JavaScript. What started with basic arithmetic grew into a more complete application, with decimal input, chained calculations, keyboard controls, result formatting, and error handling.

The challenge wasn't just making the buttons work. It was making sure that every part of the calculator worked together correctly, that calculations produced the expected results, and that the interface remained easy to use.

**Three developers. Three feature areas. One shared goal: make every calculation count.**

## 🎮 Features

| Feature | What it does |
| --- | --- |
| 🔢 Number input | Enter numbers from 0 to 9 using the calculator buttons. |
| 🔹 Decimal input | Enter decimal numbers while preventing duplicate decimal points in a number. |
| ➕ Basic arithmetic | Perform addition, subtraction, multiplication, and division. |
| 🔗 Chained calculations | Continue calculations by using each result in the next operation. |
| 🟰 Equals | Evaluate the current operation and display the answer. |
| 🧹 Clear | Reset the display and stored calculation values. |
| ⌫ Backspace | Remove the last entered character. |
| ⌨️ Keyboard support | Use supported keys to enter numbers and perform operations. |
| 📏 Result formatting | Keep long calculation results readable and prevent display overflow. |
| ⚠️ Error handling | Handle invalid calculations, including division by zero, without crashing. |
| 📱 Responsive layout | Keep the calculator usable across different screen sizes. |

## 🧪 How to use the calculator

1. Open `index.html` in a modern web browser.
2. Enter a number using the on-screen buttons or supported keyboard keys.
3. Select an arithmetic operator: addition, subtraction, multiplication, or division.
4. Enter the next number.
5. Press `=` or the supported Enter key to calculate the result.
6. Continue with another operator to perform a chained calculation.
7. Use `C` to clear the calculator or `⌫` to correct your input.

### Controls and behaviour

- **Mouse input:** Click the calculator buttons to enter numbers and perform calculations.
- **Keyboard input:** Use supported number keys, decimal point, arithmetic operators, Enter, Backspace, and Escape.
- **Decimal validation:** Only one decimal point is allowed per number.
- **Chained operations:** Operations are evaluated one pair at a time. For example, `12 + 7 - 5 * 3 =` produces `42`.
- **Division by zero:** The calculator displays a friendly error message rather than allowing an invalid result.
- **Clear and backspace:** Clear resets the calculation, while backspace removes the last character during number entry.

## 🛠️ Built with

- **HTML5** — The structure of the calculator and its interactive elements.
- **CSS3** — Calculator styling, button layouts, responsive design, and focus states.
- **JavaScript (ES6+)** — Number input, arithmetic functions, shared state, event handling, and calculator controls.
- **Git & GitHub** — Individual branches, pull requests, code reviews, and collaborative development.
- **Browser Developer Tools** — Testing functionality and troubleshooting errors.

## 🧠 What we practised

- Writing reusable functions for arithmetic operations and user input.
- Managing application state across multiple JavaScript files.
- Using event listeners to connect buttons and keyboard input to calculator functions.
- Manipulating the DOM to update the display.
- Validating decimal input and handling invalid calculations.
- Formatting numeric results to keep them readable.
- Organising code into separate files with clear responsibilities.
- Integrating independently developed features through agreed function names and shared state.
- Collaborating through Git branches, pull requests, reviews, and merges.
- Testing edge cases instead of relying only on successful calculations.

## 👩‍💻 The team

| Developer | Responsibility | Key contributions |
| --- | --- | --- |
| **Aspa Neraki** | Number input & display | Implemented digit and decimal input, managed display values, updated the display, handled error styling, and developed the related HTML and CSS. |
| **Betim Bajrami** | Arithmetic operations & calculations | Implemented addition, subtraction, multiplication, division, operator selection, the `operate()` and `calculate()` functionality, chained calculations, error handling, and the related HTML and CSS. |
| **Tahlia Kisten** | Calculator controls, formatting & responsive layout | Implemented clear and backspace functionality, keyboard support, result formatting, event-listener setup, interface integration, responsive keypad styling, and keyboard-focus states. |

The project was developed collaboratively as part of the **Mayerfeld Consulting AI-Assisted Frontend Developer Practicum**. Each team member owned a defined set of features, tested their work, and helped integrate the individual components into a complete calculator.

## 🗂️ Project structure

```text
calculator/
├── index.html       # Calculator interface
├── styles.css       # Styling and responsive layout
├── shared.js        # Shared calculator state
├── input.js         # Number input and display
├── operations.js    # Arithmetic and calculation logic
├── controls.js      # Controls, keyboard and integration
└── README.md        # Project documentation
```

### How the parts connect

1. **Shared state:** `shared.js` defines the calculator's state, including the current display value, stored operand, operator, and calculation phase.
2. **Number input:** `input.js` handles digits, decimal input, and display updates.
3. **Arithmetic operations:** `operations.js` performs calculations, manages operator selection, and handles calculation errors.
4. **Controls and integration:** `controls.js` connects button and keyboard events to the relevant functions, handles clearing and backspace, and formats results.
5. **The interface:** `index.html` and `styles.css` provide the structure, styling, and responsive layout.

The JavaScript files are loaded in a specific order so that the shared state and feature functions are available when the controls are initialized.

## 🚀 Run locally

Clone the repository:

```bash
git clone <your-repository-url>
cd <your-repository-folder>
```

Then open `index.html` in a modern web browser.

No build tools or package installation are required for the basic browser-based version.

## 🧪 Testing checklist

Before presenting the project, test the following:

- [ ] All four arithmetic operations work correctly.
- [ ] Decimal input works and duplicate decimal points are prevented.
- [ ] Chained calculations produce the expected results.
- [ ] Pressing equals without a complete operation does not cause errors.
- [ ] Clear resets the display and stored calculation values.
- [ ] Backspace removes the last character correctly.
- [ ] Division by zero displays an error message.
- [ ] Long decimal results remain readable.
- [ ] Mouse and keyboard controls work as expected.
- [ ] The calculator remains usable at different screen sizes.

## 🤝 Collaboration workflow

The team followed a feature-based workflow to divide the work and minimise conflicts. Each developer worked on their assigned features using Git branches, while shared files and function names were coordinated through the team agreement.

The public functions provided the connections between the different parts of the calculator. This allowed the team to develop number input, arithmetic operations, and calculator controls separately before integrating and testing the complete application.

## 📚 Course context

**Mayerfeld Consulting — AI-Assisted Frontend Developer Practicum**

**October 2026 | JavaScript Calculator Assignment**

This educational team project was created to practise JavaScript fundamentals, interface development, debugging, feature ownership, and collaborative software development.

---

*Every calculation has a result. Every bug has a lesson. And every developer eventually learns to test division by zero.* 🧮


