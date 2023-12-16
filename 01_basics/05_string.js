const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Ritik-RP')

// console.log(gameName[0]) //R
// console.log(gameName.__proto) //{}

//console.log(gameName.length)
//console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString )

const anotherString = gameName.slice(-8,4)   //using negative value give value in reverse
console.log(anotherString )

const newStringOne = " rishu "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://ritik.com/ritik20%rishu"

console.log(url.replace('20%','__'))  // it replaces 20% with __

console.log(url.includes('ritik'))   //boolean value

console.log(gameName.split('-'))   //{'Ritik', 'RP'}









