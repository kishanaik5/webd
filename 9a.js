//const readlineSync = require("readline-sync")
function removeDuplicates(arr) {
    // Create a Set from the array to automatically remove duplicates
    let uniqueSet = new Set(arr);
    // Convert Set back to an array
    let uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
}

// Example usage:
let arr = ["apple", "banana", "orange", "apple", "banana"];


//let input = readlineSync.question('Enter array elements separated by commas (,): ');
//let arr = input.split(',').map(item => item.trim());



let uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: ["apple", "banana", "orange"]
