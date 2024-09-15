
// require("./xyz")

// const calculateSum = require("./sum.js");

// const obj = require("./sum")

// const {x , calculateSum} = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");

const {calculateSum , calculateMultiply} = require("./calculate/index")

const data = require("./data.json");
console.log(data)

var name = "aakash";
var a=10;
var b=20;

// obj.calculateSum(a,b);
// console.log(obj.x);

calculateSum(a,b);
calculateMultiply(a,b)
console.log(x);

// console.log(a+b)

  