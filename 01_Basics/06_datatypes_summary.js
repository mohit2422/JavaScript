// 1. Primitive
// 7 types => String, Number, Boolean, BigInt, null, undefined, Symbol

const score = 33
const scoreValue = 100.33
const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const Anotherid = Symbol('123')

console.log(id === Anotherid);

const bigNumber = 12345678910111213141516n

// 2. Reference (Non Primitive)
// Array, Objects, Functions

const SuperHeros = ["Shaktiman","Krish","Hero","Hatim"]

let myObject = {
    name: "Mohit",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object