//Objects can be declared as literals and constructor

//Singleton (constructor way)
//Object.create

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Ritik",     //By default process key as string
    age : 18,
    [mySym] : "myKey1",
    location : "Sitamarhi"
    ,email : "rrishu212@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Saturday", "Sunday"] 
}

console.log(jsUser.email)
console.log(jsUser["email"]) //If key has spaces we must have to use it because . doesn't work

//I.Q How to use symbol as key
//Ans: we can't use symbol directly as . operator becuase it shows or work as key value pair
//We have to use []
console.log(jsUser[mySym])  //meKey1

jsUser.email = "rrishu121@gmail.com"
Object.freeze(jsUser) //Then, you can't change the value of jsUser

jsUser.greeting = function(){
    console.log("Hello, js user")
}

console.log(jsUser.greeting) //[function(anonymous)]
console.log(jsUser.greeting()) //Hello, js user

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`) //Using backtick for string interpolation
}  // hello js user, ritik



