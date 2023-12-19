//array

const myArray = [0,1,2,3,4,5]
const myHeroes = ["Iron-man","Spiderman", "Thor"]

const myArr = new myArr(1,2,3,4)

//array always makes the shallow copy. (Share same reference point)

console.log(myArray[0])

//ARRAY METHODS
myArray.push(6)
myArray.push(7)
console.log(myArray)

myArray.pop()

//shift and unshift
myArray.unshift(8) //Add array element from start
myArray.shift()    //Remove element from the start of the array

console.log(myArray.includes(9))   //boolean

console.log(myAraay.indexOf(3))   //Gives the index of element or -1

const newArray = myArray.join()  //All the value of the array converted into string

//Slice and splice

console.log("A", myArray)
const myn1 = myArray.slice(1,3)   //[) index 1,2,
                                 // Slice does make copy and does not effect original array 
console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1,3)   // [] index 1,2 //Splice manipulate original array and cut the part
console.log(myn2)
console.log("C", myArray)




