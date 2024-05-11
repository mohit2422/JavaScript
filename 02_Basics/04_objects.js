// const tinderUser = new Object()  // this is singleton object
const tinderUser = {}  // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Mohit"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohit",
            lastname: "Kannaujiya" 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1,obj2}

// object Assign 
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// ********* Accessing keys, values and entries of different objects ********
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 

// ********* checking object have certain properties or not ********
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// *********** Destructuring Object Concept *************
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor
const {courseInstructor} = course
const {courseInstructor: intruc} = course
console.log(intruc);