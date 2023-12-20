//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number")
    }
    console.log(element)   
}
//console.log(element) 

// for (let i = 0; i < array.length; i++) {
//     console.log(`Outer loop value : ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop value: ${j} and outer loop value: ${i}`)
//     }   
// }

// let myArray = ["Superman", "Spiderman", "Thor"]

// for (let i = ; i <myArray.length; i++){
//     const element = array[i];
//     console.log(element); 
// }

//break and continue
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i ${i}`)
    
}
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i ${i}`)
    
}


