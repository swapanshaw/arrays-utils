var abc = require("../src/app");


// test code
var arr = [1, 2, 3, 4];
var descArr = [4,3,2,1];
console.log(abc.contains(arr, 10));
console.log(abc.join([1, 2, 3], ","));
console.log(abc.map([1, 2, 3], x=>x*x));
console.log(abc.isNotEmpty([]));
console.log(abc.reduce(["swapa", "sonam", "sss", "sss"], "", function (memo, x) {
    return memo+x;
}, 0 ,4));

console.log(abc.isEqusls(arr, arr));