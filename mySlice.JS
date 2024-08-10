// Write a custom function that has the same behavior of inbuilt Array Slice Function

function slice(arr, start, end) {
    let res = [];
    if (end === undefined) {
        end = arr.length;
    }
    for (let i = start; i < end && i < arr.length; i++) {
        res.push(arr[i]);
    }
    return res;
}


let a = [1, 2, 3, 4, 5];
console.log(slice(a, 1, 4)); // Output: [2, 3, 4]
console.log(slice(a, 2));    // Output: [3, 4, 5]
console.log(slice(a, 0, 2)); // Output: [1, 2]
