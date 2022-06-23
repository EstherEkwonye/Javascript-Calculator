//setting variables
var firstNumber = parseFloat(prompt('Enter your first number'));
var operator = prompt('Enter operator ( either +, -, *, or /) ');
var secondNumber = parseFloat(prompt('Enter second number'));
//var a = nanValue || 0;

let result;
//if else statement
if (operator === '+') {
    result = firstNumber + secondNumber;
}
else if (operator === '-') {
    result = firstNumber - secondNumber;
}
else if (operator === '*') {
    result = firstNumber * secondNumber;
}
else if (operator === '/') {
    result = firstNumber / secondNumber;
}
else if (operator ==! null) {
    result = 'Error'
}
//let result = 'Is NaN an integer?' + NumberisInteger(NaN);
alert(result)
