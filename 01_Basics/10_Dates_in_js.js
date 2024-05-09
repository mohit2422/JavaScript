let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);  // It is an Object

// to create specific date and time 
// let CreateMyDate = new Date(2023, 0, 20)
// let CreateMyDate = new Date(2023, 0, 20, 5, 3)
// let CreateMyDate = new Date("12-28-2024")  // ip (mm-dd-yyyy) op (dd-mm-yyyy)
let CreateMyDate = new Date("2024-12-28")  // ip (yyyy-mm-dd) op (dd-mm-yyyy)
// console.log(CreateMyDate.toLocaleString());

// TIMESTAMP 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(CreateMyDate.getTime());

// Time right now in seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// one more way to use toLocaleString 
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}))


