// Stack Memory (Primitive)

let myYoutubeChannel = "mohitdotcom"
let myOtherChannel = myYoutubeChannel
myOtherChannel = "mohitkannaujiyadotcom"
console.log(myYoutubeChannel);
console.log(myOtherChannel);

// Heap Memory (Non-Primitive)

let userOne = {
    email: "mohit@google.com",
    upi: "mohit@ybl"
}

let userTwo = userOne

userTwo.email = "MohitKannaujiya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);