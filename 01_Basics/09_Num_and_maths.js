const score = 400
// console.log(score);

// declaring number as a object
const balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 123.4567
// console.log(othernumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(3,4,5,6));
// console.log(Math.max(3,4,5,6));

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const low = 1
const high = 6
console.log(Math.ceil(Math.random()* (high - low + 1)));