//Singleton object

const user = new Object();
//const myName = {}

user.name = "sumit"
user.address= "nepal"
user.isLoggedIn = true;
user.age = 22

console.log(user);


// nested objects
const regUser = {      
    email:"kdk.com",
    userName: {
        fullName: {
            firstName: "sumit",
            lastName: "das"
        }
    }
}

console.log(regUser.userName.fullName.firstName) // sumit

const ob1 = {1:"a",2:"b",3:"3"}
const ob2 = {5:"f",6:"v",7:"x"}

const ob3 = Object.assign({},ob1,ob2) //Copy the values of all of the enumerable own properties
                                        // from one or more source objects to a target object. Returns the target object.
console.log(ob3)     

// using spread operator

const ob4 = {...ob1,...ob2}  //cpy values of one object in another and returns new array
console.log(ob4)

// array of objects

const arr = [
    { a: "hello",b:"hii" },
    {  },
    {   }
]

console.log(arr[0].a) // accessing first array object

console.log(Object.keys(user)) // returns the array containing keys of user object

console.log(Object.values(user)) // returns the array containing values of user object

console.log(Object.entries(user)) // returns array of key value pair

console.log(user.hasOwnProperty('isLoggedIn')) //returns boolean value
