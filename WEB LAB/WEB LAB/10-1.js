function removeDuplicates(arr) {
    // Create a Set from the array to automatically remove duplicates
    let uniqueSet = new Set(arr);
    // Convert Set back to an array
    let uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
}

// Example usage:
let arr = ["apple", "banana", "orange", "apple", "banana"];
let uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);