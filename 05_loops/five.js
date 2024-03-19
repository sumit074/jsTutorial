const myObj = {
    1 : "sumit",
    2 : "susant",
    3 : "manjil",
    4: "nabin"
}

for (const key in myObj) {
   console.log(`${key} and its value is ${myObj[key]}`)
}