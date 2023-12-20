const myObj = {
    js : "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
    console.log(`${key} for ${myObj[key]}`)
}

//output: js for javascript
// cpp for C++
// rb for ruby
// swift for Swift by apple

const program = ["js", "cpp", "rb", "swift"]

for (const key in object) {
   console.log(key)  //output //0,1,2,3
   console.log(program[key]) //Gets all value of array
}

//You can't use forin loop for map