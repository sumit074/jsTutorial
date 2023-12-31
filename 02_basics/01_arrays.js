 //Arrays

 const myArrays = [0,2,3,4,5] // javascript arrays are resizable and can contain mix of data types

 console.log(myArrays[0]); // 0 based indexing

 const myHeroes = ["yuvrajSingh","abd","chrisGayle"]

 const myArr = new Array(2,3,4,45,6)

 //Array Methods

 myArr.push(80) //pushes 80 in the array
 console.log(myArr)
 myArr.pop() //deletes the last element of array
 console.log(myArr)

 myArr.unshift(8) //pushes element at beginning
 myArr.shift() //removes element from beginning

 console.log(myArr.includes(8)) //returns true or false
 console.log(myArr.indexOf(45)) //returns index of the element

 const newArr = myArr.join()
console.log(newArr) // returns the string

// slice   //splice

console.log("A",myArr);

const nw1 = myArr.slice(1,3);  // i=1 to i<3 
console.log(nw1) // 3,4

const nw2 = myArr.splice(1,3)  // i=1 to i<=3
console.log(nw2) //   3,4,45
console.log(myArr) // the array will contain the remaining part after splicing (2,6)






