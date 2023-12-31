 /// OBJECT DESTRUCTURING

 const obj = {
    name: "sumit",
    age: 22
 }

 console.log(obj.age) 

 // instead of using .operator we can destructure object in to following

 const {age} = obj;
 console.log(age)

 // or we can also do this

 const {age: userAge} = obj;
 console.log(userAge) //22