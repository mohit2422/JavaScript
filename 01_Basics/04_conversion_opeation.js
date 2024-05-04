/****************** String to Number ************************/ 
let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/****************** Outputs for different values of score ************************/
// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

/****************** String to Boolean ************************/
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/****************** Outputs for different values of isLoggedIn ************************/
// 1 => true , 0 => false
// "" => false
// "Mohit" => true

/****************** Number to String ************************/
let somenumber = 33
let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);