const marvel_heroes = ["Thor", "Iron-man", "Hawk-eye"]
const DC_Heroes = ["Superman", "Flash", "Joker"]

marvel_heroes.push(DC_Heroes)  //["Thor", "Iron-man", "Hawk-eye", ["Superman", "Flash", "Joker"]]

//For accessing flash
console.log(marvel_heroes[3][1]) ///Not a good prectice

const allHeroes = marvel_heroes.concat(DC_Heroes) 
//This will return a new array without disturbing old array

console.log(allHeroes)
//["Thor", "Iron-man", "Hawk-eye", "Superman", "Flash", "Joker"]

const allNewHeroes = [...DC_Heroes, ...marvel_heroes]

console.log(allNewHeroes)
//["Thor", "Iron-man", "Hawk-eye", "Superman", "Flash", "Joker"]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity) //Here, we gave defth of flattening , infinity

console.log(real_another_array)
//[1,2,3,4,5,6,7,6,7,4,5]

//Now, WE ARE GOING TO STUDY
//This method mostly used in data scrapping

console.log(Array.isArray("Ritik"))   //false
console.log(Array.from("Ritik"))      //Convert anything to array

console.log(Array.from({name : "Ritik"})) 
//[] //Because, you don't specify you need array of key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) //[100, 200, 300]
//RETURN NEW Array from set of inputs

