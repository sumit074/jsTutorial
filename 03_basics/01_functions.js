
// functions

function add(a,b){
    console.log(a+b)
}

const result = add(3,4)
console.log(result) //undefined


function addNum(num1,num2){
    // let result = num1+num2
    // return result
     return num1+num2
}
const ans = addNum(8,9);
console.log(ans)

function userLogin(username /* = "defaultValue" */){
    if(username === undefined) {
        console.log("enter a username");
    }
    return `${username},just logged in`
}
const msg = userLogin("sumit")
console.log(msg)
//const msg = userLogin() //undefined,just logged in

// rest operator(...) ---> 

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,800)) // returns an array of numbers

const user = {
    name: "sumitdas",
    id: "ab74"
}

function displayUser(anyobject){
    return `${anyobject.name} and id is ${anyobject.id}`
}
console.log(displayUser(user)) 

//objects can be directly be passed 
console.log(displayUser(
    {
        name:"michael",
        id:"das"
    }
))

const arr = [2,3,4,5,90]

function returnlastValue(getArray){
    return getArray[getArray.length-1]
}
console.log(returnlastValue(arr))

//array can be directly passed 
console.log(returnlastValue(
    [3,4,5,6,7,12]
))