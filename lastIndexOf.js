// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function lastIndexOf(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i; 
        }
    }
    return -1;
}

let array = [2, 5, 9, 2, 3];
console.log(lastIndexOf(array, 2)); 
console.log(lastIndexOf(array, 5)); 
console.log(lastIndexOf(array, 7)); 
