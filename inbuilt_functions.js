//  inbuilt functions 
// let str = "  life is good  ";
// console.log(str.length)
// console.log(str.trim());    //to remove all the spaces

 //Split --> takes string value and converts it into arra value
// let str = "life is good";
// console.log(str.split());

// console.log(str.split(" "));
// let str = "life is good";

// console.log(str.split(""));

// console.log(str.indexOf("i"));
// console.log(str.indexOf("w"));
// it will retun -1 coz there is no element

// console.log(str.indexOf(" "));

// console.log(str.replace("good","bad"))

//str started with li --> yes
//pablo --> no

// let str = "life is good";

// console.log(str.startsWith("li"));
// console.log(str.endsWith("ad"))
// console.log(str.includes("lava"))
// console.log(str.includes("li"))
// let arr = [1,6,3,7,5];
// arr.pop();
// arr.push(10); // it will add the element in the begining 
// arr.unshift(10); // adds the element at first
// arr.shift();
// arr.pop();
// arr.includes("2")
//arranging a number from small to high --> ascending order
//arranging a number from high to small --> descending order
// arr.sort();
// arr.sort((a , b) => a - b); 
//it will helps to sort array includes 10

// console.log(arr.reverse());

// array --> string --> join

//    let arr = [1,6,3,10,7,5];
//    let res = arr.join();
// //    console.log(res);
// console.log(arr.typeOf());
// let arr = [1,6,3,10,7,5];
// console.log(arr.slice(2))
// incluse

//5 - false
//10 - true
// create function

function myInclude(arr,ele){
    let flag = false;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === ele){
            flag = true;
        }
    }
    console.log(flag);
}

let arr = [10,2,3,7,1];

myInclude(arr,10)

function myJoin(arr,basis){
    let res ="";
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length-1){
            res+=arr[i];
        }
        else{
            res+=arr[i]+basis
        }
}
console.log(res);
}

// myJoin([1,2,3,4,5],"-")
myJoin([1,2,3,4,5],"+")












