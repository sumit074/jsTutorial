
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
