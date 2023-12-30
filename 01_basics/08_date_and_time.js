//Dates

let myDate = new Date()

console.log(myDate)  //2023-12-30T14:00:40.383Z


console.log(myDate.toDateString()) //Sat Dec 30 2023

console.log(myDate.toLocaleDateString()) //12/30/2023

console.log(myDate.toString()) //Sat Dec 30 2023 14:00:40 GMT+0000 (Coordinated Universal Time)

console.log(typeof(myDate)) //object
 
let mydate = new Date(2023,0,1,19,35) // 1/1/2023, 7:35:00 PM
let date = new Date("01-12-2023") //  1/12/2023, 12:00:00 AM
console.log(date.toLocaleString())  

let myTimeStamp = Date.now();
console.log(myTimeStamp) // 1703945382544

console.log(myDate.getTime()) // 1703945432189

console.log(Math.floor(Date.now()/1000)) //gives times in seconds



// to customize locale string
myDate.toLocaleString('default',{
    weekday: 'long',
    day:'2-digit'
}
)