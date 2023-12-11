var num1 = '';
var num2 = '';
var operator = '';

function appendNumber(number) {
    if (operator === '') {
        num1 += number;
        document.getElementById('result').value = num1;
    } else {
        num2 += number;
        document.getElementById('result').value = ` ${num2}`;
    }
}

function setOperator(op) {
    if (num1 !== '') {
        operator = op;
        document.getElementById('result').value = `${num1} ${op} `;
    }
}

function calculate() {
    var result = '';
    switch(operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return; 
    }
    
    document.getElementById('result').value = result.toString();
    
   
    num1 = '';
    num2 = '';
    operator = '';
}

function clearResult() {
    document.getElementById('result').value = '';
    
    
    num1 = '';
    num2 = '';
    operator = '';
}