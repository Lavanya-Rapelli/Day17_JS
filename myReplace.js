// Write a custom function that has the same behaviour of inbuilt String Replace Function

function replace(str, search, replacement) {
    let result = '';
    let i = 0;

    while (i < str.length) {
        if (str.substr(i, search.length) === search) {
            result += replacement;
            i += search.length;
        } else {
            result += str[i];
            i++;
        }
    }

    return result;
}


console.log(replace("hello world", "world", "there")); // Output: "hello there"
console.log(replace("hello world world", "world", "there")); // Output: "hello there there"
