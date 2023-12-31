// global and local scpoe

let a = 300
if(1){
    let a=20
    const b=10
    var c=11
    console.log("inner",a) // inner,20
}
// console.log(a) // will not be executed outside its scope
// console.log(b) // will not be executed outside its scope
// console.log(c)  //will be executed
console.log(a) //300  as a=20 will not be executed outside its scope

// //n JavaScript, variables declared with var have function scope,
//  which means they are only scoped to the function in which they are declared, 
//  not to blocks like if statements or loops. So, in your code,
//   the var a inside the function aboveValueChange is actually
//    a different variable than the one declared outside the function.


function one(){
    const name = "mike"
    function two(){
        const id="abd"
        console.log(name)
    } 
    //console.log(id) //can not be accessed 
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //6

function addone(num){
    return num + 1
}



addTwo(5) //will give error as the function is held in a variable and Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
