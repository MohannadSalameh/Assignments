class Calculator {
    constructor() {
        this.expression = "";
    }

    append(value) {
        this.expression += value;
    }

    clear() {
        this.expression = "";
    }

    evaluate() {
        const result = this.parseAndCalculate(this.expression);
        if (result === null) {
            this.expression = "Cannot divide by 0";
            return;
        }
        this.expression = result.toString();
    }

    getDisplay() {
        return this.expression;
    }

    validateExpression(expr) {
        const validPattern = /^(\d+\.?\d*)([\+\-\*\/]\d+\.?\d*)*$/;
        return validPattern.test(expr);
    }

    parseAndCalculate(expr) {
        const tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
        if (!tokens) return null;

        let current = parseFloat(tokens[0]);

        for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const next = parseFloat(tokens[i + 1]);

        if (isNaN(next)) return null;

        switch (operator) {
            case '+': current += next; break;
            case '-': current -= next; break;
            case '*': current *= next; break;
            case '/':
            if (next === 0) return null;
            current /= next;
            break;
            default:
            return null;
        }
    }

        return current;
    }
}

const calc = new Calculator();

function press(value) {
    calc.append(value);
    updateDisplay();
}

function clearDisplay() {
    calc.clear();
    updateDisplay();
}

function calculate() {
    calc.evaluate();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = calc.getDisplay();
}