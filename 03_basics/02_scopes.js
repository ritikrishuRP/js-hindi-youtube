let a = 10;
const b = 30;
var c = 20;

console.log(a)
console.log(b)
console.log(c)

//Global scope is different in console and in editor where we run code like git, vs code

if(true){
let a = 10;
const b = 30;
var c = 20;
}

//Variable should be inside of if scope. 
//let and var follows it but var doesn't that is bad practice

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website) //It throws error //Because child can acces parent function variable but 
                                           //parent function can't access child function variables
 
    two()
}
one()

if(true){
    const username = "ritik"
    if(username==="ritik"){
        const website = "youtube"
        console.log(username+website)
    }
    console.log(website) //throws error
}
console.log(username)   //throws error


//***********************interesting**************************/

console.log(5)   //It runs //6

function addOne(num){  //it's called function
    return num +1
}

addTwo(5)     ///It throws error //later we learn in hoisting
const addTwo = function(num){ //It's called expression
    return num + 2
}