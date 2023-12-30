const score = 123.466 
const newNum = new Number(10000000)

console.log(score) //100
console.log(newNum)  //[Number: 10000000]

console.log(newNum.toString()); //converts number to string

console.log(score.toFixed(0)) //123

console.log(newNum.toLocaleString('en-IN')) // separates digits using comma

console.log(score.toPrecision(5))


//+++++++++++++++++++++++++++++++++++++++++++++//
//  Maths //

console.log(Math) // is an object with many properties

console.log(Math.abs(-9)) //9

console.log(Math.round(6.4)) //6

console.log(Math.ceil(9.4)) // 10

console.log(Math.floor(9.8)) // 9  

console.log(Math.ceil((Math.random()*10)+1))  // Math.random() gives random value between 0 & 1
                                         // and Math.ceil() gives ceiling value of a number
                                       
console.log(Math.pow(2,4)) // 2 raised to the power 4

console.log(Math.sqrt(49)) // sqrt of a number

console.log(Math.min(4,5,6,7)) //min from the numbers
console.log(Math.max(995,3,4,5)) //max from array


// to get numbers between min and max number

const min = 10
const max = 20

const ans = Math.ceil(Math.random()*(max-min+1)+min)
console.log(ans)
