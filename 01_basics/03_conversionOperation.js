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
