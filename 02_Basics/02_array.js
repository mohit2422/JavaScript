const marvel_heroes = ["Ironman", "Thor", "Hulk"]
const dc_heroes = ["Batman", "Superman", "Falsh"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][0]);

// ************** Concat and [...1,....2] *****************

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);

// ********** flat(degree) *********

const arr = [1,2,3,[4,5,6],7,[8,[9,10]]]

const flat_arr = arr.flat(2)
// console.log(flat_arr);

// ********* isArray, from, of ************

console.log(Array.isArray("Mohit"));
console.log(Array.from("Mohit"));
console.log(Array.of("Mohit"));
console.log(Array.from({name: "Mohit"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));