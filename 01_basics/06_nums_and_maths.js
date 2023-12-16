const score  = 400
console.log(score) // 400

const balance = new Number(100)
console.log(balance)                  //[Number : 100]

console.log(balance.toString().length)  //3
console.log(balance.toFixed(1))         // 100.0

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3))  // 23.9

//If precision of otherNumber set to 1. it goes to power

const hundreds = 10000000
console.log(hundreds.toLocaleString())

//****************** Math **********************/

// console.log(Math)    //Object [Math] {}
// console.log(Math.abs(-4))      //4
// console.log(Math.round(4.6))   //5
// console.log(Math.ceil(4.5))    //5
// console.log(Math.floor(4.9))   //4
// console.log(Math.min(3 ,6, 9, 2))  //2
// console.log(Math.max(3 ,6, 9, 2))  //9
 
console.log(Math.random())          //gives the random value
console.log((Math.random()*10) + 1) // To avoid 0 case
console.log(Math.floor(Math.random()*10) + 1)

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1) + min)) //To get random value between min and max
