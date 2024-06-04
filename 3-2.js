/* create this code in seperate calculator-js file 
exports.add = function(a,b){
    return a+b;
};

exports.subtract = function(a,b){
    return a-b;
};
*/ 
var calculator = require('./calculator');

var a=10, b=5;

console.log("Addition: "+ calculator.add(a,b));
console.log("Subtraction : " + calculator.subtract(a,b));
