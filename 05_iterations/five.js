//mostly used
const coding = ["js", "cpp", "rb", "java", "swift", "flutter", "kotlin"]

// coding.forEach(function(val){
//     console.log(val)
// })
//All value of array printed

// coding.forEach((val)=>console.log(val))
//All value of array printed

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)
// print all the array value

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })
//It print all the array items along with index and all array items everytime

const myCoding = [
    {
        programming: "javascrpt",
        programmingFile: "js"
    },
    {
        programming: "java",
        programmingFile: "java"
    },
    {
        programming: "python",
        programmingFile: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.programmingFile)
})