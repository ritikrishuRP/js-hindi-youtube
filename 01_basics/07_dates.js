let myDate = new Date()
// console.log(myDate.toString())    //Sat Dec 16 2023 23:26:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())  //Sat Dec 16 2023
// console.log(myDate.toLocaleString()) //12/16/2023, 11:26:04 PM
// console.log(typeof myDate)           //object

//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023 //Providing more input parameter gives time

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())  // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp)       //In milisecond from jan 1970 to till date

console.log(myCreatedDate.getTime()) // In millisecond from jan 1970 to 14 jan 2023

console.log(Math.floor(Date.now()/1000)) //In seconds

let newDate = new Date()

console.log(newDate)                // unknown data
console.log(newDate.getDay())      //Current day number
console.log(newDate.getMonth()+1) // current math number

newDate.toLocaleString('default',{
    weekday: "long"
})
//you can suggest the properties
