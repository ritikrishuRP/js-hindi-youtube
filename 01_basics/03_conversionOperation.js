let score = "33"

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// The output of typeof in case of "33abc" we get NaN and for null is 0 and NaN for undefined.

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ******************** Operations *******************
let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Ritik"
let str2 = " Ritik"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)       //12
console.log(1 + "2")       //12
console.log("1" + 2 + 2)   //122
console.log(1 + 2 + "2")   //32

console.log(+true) //1
console.log(+"")   //0

let gameCounter = 100
++gameCounter
console.log(gameCounter)












