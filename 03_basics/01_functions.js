console.log("R")
console.log("I")
console.log("T")
console.log("I")
console.log("K")

function sayMyName(){
console.log("R")
console.log("I")
console.log("T")
console.log("I")
console.log("K")
}

sayMyName  //reference
sayMyName() //execution

function addTwoNumbers(number1, number2){ //Here, we don't have to specify datatype for parameter
   console.log(number1 + number2)
}

//console.log(addTwoNumbers(3,4))   //7      //arguments
//console.log(addTwoNumbers(3,"4"))  //34
//const result = addTwoNumbers(4,4)
console.log(addTwoNumbers)   //undefined, because we print not return

function addTwoNumbers(number1, number2){ 
    console.log("Ritik")
    let result = number1 + number2
    return result
 }

const result = addTwoNumbers(4,4)
console.log(result)                     //8

function loggedInUser(username){ // username = "rishu" //professional use, when no name passed
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loggedInUser("ritik"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500)) //[ 200, 400, 500 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500, 800, 1000)) //[ 500, 800, 1000 ]

const user = {
    username: "Ritk",
    price: 199

}

function handleUser(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleUser(user)    //Username is Ritk and price is 199
handleUser({
    username: "Rishu",
    price: 399
})                         //Username is Rishu and price is 399

const myArray = [200, 400, 600, 800]

function returnValue(getArray){
    return getArray[0]
}

//console.log(returnValue(myArray))
console.log(returnValue([10,20,30,40]))



