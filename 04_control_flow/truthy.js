//falsy values

//false, 0, -0, null, undefined, "", BigInt 0n, undefined, NaN

//truthy values

//"0",'false'," ",[], {}, function(){}
const userEmail = []

if(userEmail.length===0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//General Knowledge // false ==0  (true) // false == '' (true) // 0=='' (true)

//Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10  // 5
// //It helpfull in caese where you get sometime null or undefined from database
// val1 = null ?? 15 //15 //It uses for safety
// val1 = undefined ?? 5 //5
// val1 = null ?? 10 ?? 20 //10
// console.log(val1)

//Ternary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80")
