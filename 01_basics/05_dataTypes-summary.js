//primitive data types --> Number,String,Boolean,null,undefined,symbol,bigInt

//reference(non-primitive) --> arrays,objects,functions 

//+++++++++++++++++++++++++++++++//

//stack(primitive)  &&  Heap(non-primitive)


//in stack memory

/*Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.
*/
let ans = 23;
let ansCpy = ans
ansCpy = 34
console.log(ans) //23
console.log(ansCpy) //34


//In heap memory 

/*. Non primitive dataType get stored in HEAP memory. 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes the both values(original and assigned one. 
*/

let one = {
    emailId : "hlo@g.com",
    phm : "23456"
}

let two = one

two.emailId = "jdhdjh.com"

console.log(one.emailId); //jdhdjh.com
console.log(two.emailId); //jdhdjh.com

