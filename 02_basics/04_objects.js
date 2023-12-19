//const tinderUser = new Object() //{}
const tinderUser = {}

console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "ritik"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "hitesh",
            lastName: "chowdhary"

        }
    }
}

console.log(regularUser.fullName)