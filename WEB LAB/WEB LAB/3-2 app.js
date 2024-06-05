// app.js
const readline = require('readline-sync');
const calculator = require('./3-2 calculator');

console.log("Simple Calculator");
console.log("Choose an operation:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");

const choice = readline.question("Enter your choice (1/2/3): ");
const num1 = parseFloat(readline.question("Enter the first number: "));
const num2 = parseFloat(readline.question("Enter the second number: "));

let result;

switch (choice) {
    case '1':
        result = calculator.add(num1, num2);
        console.log(`The result of adding ${num1} and ${num2} is ${result}`);
        break;
    case '2':
        result = calculator.subtract(num1, num2);
        console.log(`The result of subtracting ${num1} from ${num2} is ${result}`);
        break;
    case '3':
        result = calculator.multiply(num1, num2);
        console.log(`The result of multiplying ${num1} and ${num2} is ${result}`);
        break;
    default:
        console.log("Invalid choice! Please choose 1, 2, or 3.");
}
