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
// console.log(booleanIsLoggedIn);

/****************** Outputs for different values of isLoggedIn ************************/
// 1 => true , 0 => false
// "" => false
// "Mohit" => true

/****************** Number to String ************************/
let somenumber = 33
let stringNumber = String(somenumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/****************** Operations ************************/
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(4/3);
// console.log(4%3);

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log(+true);
// console.log(+"");
let num1, num2, num3
num1 = num2 = num3 = 2+3

let gameCounter = 100
gameCounter++
console.log(gameCounter);