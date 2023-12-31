
// object literals

const mySym = Symbol("key1")

const jUser = {
    name: "sumit",
    age: 19,
    isFat: false,
    email: "sgsg.com",
    [mySym]: "myKey",
    marks: [34,55,53],
    "full name": "sumit kumar das"
}

//accessing object elements

console.log(jUser.email); //one method

console.log(jUser["age"]) // "full name cannot be accessed by using . operator so we use []"
console.log(jUser["full name"]) //sumit kumar das

// jsUser.email = "hitesh@chatgpt.com"
// //Object.freeze(jsUser)  //after freezing the values cannot be changed
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jUser.greeting = function(){
    return console.log("Hello");
}

jUser.greetingTwo = function(){
    return console.log(`Hello this is ${this["full name"]}`);
}

console.log(jUser.greeting())
console.log(jUser.greetingTwo())