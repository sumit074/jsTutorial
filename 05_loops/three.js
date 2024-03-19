

// for of

const arr = [1,2,3,4]

for (const num of arr) {
    console.log(`${num}`)
}

const greeting = "hello world"

for (const greet of greeting) {
    console.log(`${greet}`)
}

const map = new Map()
map.set(1,"sumit")
map.set(2,"abd")
map.set(3,"lol")

console.log(map)

for (const [key,Value] of map) {
    console.log(key, ':-', Value)
}