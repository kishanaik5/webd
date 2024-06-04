const readline = require('readline-sync');

let n = readline.question("Enter A NUmber: ");

n = Number(n)
if(!isNaN(n) && n>0){
    let factorial = 1;
    for (var i =1; i<=n ; i++){
        factorial *= i;
    }

    console.log("The factorial of"+ n + " is "+ factorial);
}
else{
    console.log("Please enter a valid positive number");
}
