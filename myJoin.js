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