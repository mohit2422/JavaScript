const name = "Mohit"
const repoCount = 50

// string concatenation
// console.log(name + repoCount + " Value");

// string interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`);     // `` is called backticks

// declaring string as a object
const gameName = new String('mohit-kannaujiya') 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString1 = gameName.substring(0,5)
console.log(newString1);

const newString2 = gameName.slice(0,6)
console.log(newString2);

const newString3 = "   Mohit   "
console.log(newString3.trim());

const newString4 = new String('mohitkannaujiya')
console.log(newString4.startsWith('ohit',1));

const url = "mohit%20kannaujiya.com"
console.log(url.replace('%20','--'));
console.log(url.includes('mohit'));

console.log(gameName.split('-'));