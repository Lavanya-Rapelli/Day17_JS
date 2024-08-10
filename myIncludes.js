// Write a custom function that has the same behavior of inbuilt Array Includes Function

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log(includes(array, 3)); // Output: true
console.log(includes(array, 6)); // Output: false
