//loops are array specific
//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`value : ${greet}`)
}

//Map

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')

// console.log(map) //Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

// for (const [key,value] of map) {
//     console.log(key, ':-', value)
// }
// //output //IN :- India
// USA :- United States of America
// Fr :- France

// const myObject = {
//     game1: "COD",
//     game2: "PUBG"
// }
//Object not iterable








