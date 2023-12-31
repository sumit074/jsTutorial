
const mcu = ["ironman","thor","hawkeye"]
const dcu = ["batman","flash","superman"]

mcu.push(dcu) // the whole array will be pushed in mcu 
console.log(mcu) // [ 'ironman', 'thor', 'hawkeye', [ 'batman', 'flash', 'superman' ] ] 

const h1 = [2,3,4,5]
const h2 = [6,7,8,9]

const h3 = h1.concat(h2) // array h2 will be concated with h1 {concat combines two or more arrays and returns a new array}
console.log(h3) // 2,3,4,5,6,7,8,9 

const a1 = ["q","r","s"]
const a2 = ["a","b","c"]

//SPREAD operator (...) //spreads array in to idividual element and combines two or more arrays
const a3 = [...a1,...a2,...h2,...h3] //combines a1 ,a2 ,h1,h3
console.log(a3)

// flat --when we have arrays inside arrays inside another array

const arr = [1,2,[3,4,5,[6,7],8],9,80]
const realArr = arr.flat(Infinity) // 1,2,3,4,5,6,7,8,9,80


console.log(Array.isArray("sumit")) //false

console.log(Array.from("sumit")) //converts the data given into array --- [ 's', 'u', 'm', 'i', 't' ]

console.log(Array.from({name:"sumit"})) // returns empty array because we should tell the method to make array of key or value

//
let score1 = 12
let score2 = 34
let score3 = 90

console.log(Array.of(score1,score2,score3)) //returns a new array from a set of elements
