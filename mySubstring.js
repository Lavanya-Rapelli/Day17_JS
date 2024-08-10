// Write a custom function that has the same behavior of inbuilt String Substring Function

function substring(str, start, end) {
    if (end === undefined) end = str.length;
    if (start > end) [start, end] = [end, start];
    let result = '';
    for (let i = start; i < end && i < str.length; i++) {
        result += str[i];
    }
    return result;
}

// Example usage:
console.log(substring("hello world", 6, 11)); // Output: "world"
console.log(substring("hello world", 3));    // Output: "lo world"
console.log(substring("hello world", 11, 6)); // Output: "world"
