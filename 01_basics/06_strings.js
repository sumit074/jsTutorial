// string -- primitive data type

const firstName = "sumit"
const lastName = " das"
const address = "jhapa"
const name = firstName + lastName
console.log(name) // sumit das

const name1 = new String('hero')
console.log(name1) // hero

// string interpolation
// ${} --> can be used for string concatenation

console.log(`hello my name is ${name} and i am from ${address}.` )

// string methods

console.log(name.length) //length of name -->8

// we have many string methods
console.log(name[0]) // first character of string
console.log(name.toUpperCase()) //SUMIT DAS 
console.log(name.length) //length of string
console.log(name.charAt(4)) //character at index 4
console.log(name.indexOf('u')) //index of character 

const newName = name.substring(0,6) //sumit
const anotherName = name.slice(-8,4)  // slices from reverse
console.log(newName)
console.log(anotherName)

//advanced string methods

const myName = "   sumitDas   "
console.log(myName.trim()) // removes whitespace from both ends

const url = "//https.//sumit%&mmma"
console.log(url.replace('%','-')) // replaces % with -

console.log(name.includes('sumit')) // returns true if substring sumit is present in name

const game = "football-cricket-chess"
console.log(game.split('-')) // returns an array of strings splitted after '-'. in this case ['football','cricket','chess'] is the array

