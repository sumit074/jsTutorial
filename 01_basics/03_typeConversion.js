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

/*---------------OPERQATIONS-----------------*/

let str1 = "sumit"
let str2 = "das"
let str3 = str1 + " " + str2 // sumit das
console.log(str3)

console.log(1+"2") //12
console.log("1"+2) // 12
console.log("1"+2+2) //122
console.log(3+2+"5") //55

console.log(1+true) //2