// singleton 
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Mohit",
    "full name" : "Mohit Kannaujiya",       // key can be default declare as string like value
    [mySym] : "myKey1",  // defining symbols
    age : 22,
    location : "Kolkata",
    email : "mohit2422141@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday','Thrusday']
}

// console.log(JsUser.name);
// console.log(JsUser["age"]);   // alternate way to access the value of key
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);  // way to access value of a symbol key

// changing values of key 
JsUser.email = "MohitKannaujiya9795@gmail.com"
// console.log(JsUser.email);

// we can freeze the object 
// Object.freeze(JsUser)
JsUser.email = "MohitKannaujiya@gmail.com"
// console.log(JsUser.email);

// Adding function in object
JsUser.greeting = function(){
    console.log("Hello Js Users");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js Users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
