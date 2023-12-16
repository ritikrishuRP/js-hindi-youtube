// # primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol (helps to make value unique), BigInt

// # reference 

//Array, object, function

// JavaScript is a Dynamically-typed languages are those (like JavaScript) where the interpreter
// assigns variables a type at runtime based on the variable's value at the time.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 47635493423483n

const Heroes = ["shaktiman", "nagraz", "doga"]

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunc = function(){
    console.log("Hello world");
}

//***************Stack and Heap********************

//Stack (Primitive), Heap(non-primitive)

let userOne = {
    email: "rrishu212@gmail.com",
    upi: 28
}

let userTwo = userOne

userTwo.email = "rohan@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)













