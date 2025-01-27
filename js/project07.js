let memory = 0;

function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        if (expression.includes('/0')) {
            throw new Error("Cannot divide by zero");
        }
        document.getElementById('display').value = eval(expression);
        memory = document.getElementById('display').value;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        let value = document.getElementById('display').value;
        if (value < 0) {
            throw new Error("Invalid input");
        }
        document.getElementById('display').value = Math.sqrt(value);
        memory = document.getElementById('display').value;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}
