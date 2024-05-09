// () -> parenthesis
// [] -> brackets/square bracktes
// {} -> braces/curly braces

// Array

const myArr = [1,2,3,4,5,6]
const myHero = ["Shaktimaan","Krish","G-one"]

const myArr2 = new Array(1,2,3,4)  // other way to defining array

// console.log(myArr);
// console.log(myArr[1]); // accessing the index elements
// console.log(myHero);
// console.log(myArr2);

// Array Methods
// ******************** push and pop *******************

myArr.push(7)
myArr.push(8)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

// ************ unshift and shift *******************

myArr.unshift(0)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// ***************** includes or not ****************
// console.log(myArr.includes(3));

// **************** joins make copy of array and convert it to string
const newArr = myArr.join()
myArr.pop()
// console.log(newArr);
// console.log(myArr);

// ***************** Slice and Splice ******************
console.log("A ", myArr);

const mynew1 = myArr.slice(1,3)
console.log(mynew1);

console.log("B ", myArr);

const mynew2 = myArr.splice(1,3)
console.log(mynew2);

console.log("C ", myArr);


