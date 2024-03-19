 // for each

 const myARr = ["su","mi","t"]

 myARr.forEach(function(val){
    console.log(val);
 })
 //using arrow function
 myARr.forEach((item)=>{
    console.log(item)
 })

 function printMe(item){
    console.log(item)
 }

 myARr.forEach((item,index,myARr)=>{
    console.log(item,index,myARr)
 })

 const heroes = [
    {
    "name1":"batman",
    "name2":"catman",
    "name3":"ratman"
    },
    {
        "name1":"bratman",
        "name4":"catmran",
        "name5":"ratmffan"
        
    },
    {
        "name1":"batman",
        "name7":"catman",
        "name8":"ratman"
        }

 ]

 heroes.forEach((item)=>{
    console.log(item.name1)
 })