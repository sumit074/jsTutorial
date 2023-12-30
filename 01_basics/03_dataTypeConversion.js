let score = "77"
let valueInNum = Number(score)  // converts string in to number 

console.log(valueInNum)
console.log(typeof(score))
console.log(typeof(valueInNum))

// "23" => can be converted to number
// "23abd" => gives Nan
// true=>1 and false=>0

let isTrue = 1
let isBool = Boolean(isTrue)
// isBool => true

let is_true = "ddd"
let isBoolean = Boolean(isTrue)
//isBoolean => true
// for empty string isBoolean will be false

let num = 123
let toString = String(num) // converts number to string
