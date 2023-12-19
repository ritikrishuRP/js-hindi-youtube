//const tinderUser = new Object() //{}
const tinderUser = {}

console.log(tinderUser) //{}

tinderUser.id = "123abc"
tinderUser.name = "ritik"
tinderUser.isLoggedIn = false

console.log(tinderUser) //{ id: '123abc', name: 'ritik', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "hitesh",
            lastName: "chowdhary"

        }
    }
}

console.log(regularUser.fullName) //{ userfullname: { firstName: 'hitesh', lastName: 'chowdhary' } }
console.log(regularUser.fullName.userfullname.firstName)

const obj1 = {1: "a", 2: "c"}
const obj2 = {3: "a", 4: "d"}

//const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'c' }, obj2: { '3': 'a', '4': 'd' } }
//const obj3 = Object.assign({}, obj1, obj2) 
//console.log(obj1) //{ '1': 'a', '2': 'c' }
//console.log(obj3) //{ '1': 'a', '2': 'c', '3': 'a', '4': 'd' }

const obj3 = {...obj1, ...obj2} //mostly used

//database generally send array of object

const user =[
    {
        id : "asasa@gmail.com",
        name: "pta nhi"
    },
    {
        id : "asasa@gmail.com",
        name: "yhi hain"
    },
    {
        id : "asasa@gmail.com",
        name: "pta nhi"
    }
] 
console.log(user[1].name)

console.log(tinderUser)   //{ id: '123abc', name: 'ritik', isLoggedIn: false }

console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))  //[ '123abc', 'ritik', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'ritik' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //boolean //true

const course = {
    name : "ritik",
    courseName: "chai aur code",
    instructor: "hitesh"
}

const {instructor : teacher} = course

console.log(instructor) //hitesh
console.log(teacher) //hitesh