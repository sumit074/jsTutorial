const myNums = [1,2,3,4,5,6,7]

const newNums = myNums.filter((num) => num > 5)
console.log(newNums)


const newAns = myNums.filter((num) => {
    return num<4
})

console.log(newAns)

const arr = []

myNums.forEach((num)=>{
    if(num%2==0){
        arr.push(num)
    }
})
console.log(arr)

const books = [
    {
        title:'one',genre:'history'
    },
    {
        title:'two',genre:'comic'
    },
    {
        title:'three',genre:'geography'
    }
]
const his = books.filter((bk) => bk.genre==='history' || bk.title==='three')
console.log(his)


const nums = [1,2,3]
const ans= nums
           .map((num) => num+10)
           .map((num)=>num*2)
           .filter((num)=> num>22)
console.log(ans)


// reduce 


const a = [1,2,3,5]
const initialval=0
const value = a.reduce((accumulator,currNum) => accumulator+currNum,initialval)
console.log(value)