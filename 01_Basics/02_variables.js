const accountID = 1234
let accountEmail = "mohit2422141@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"

//accountID = 4321 //const change are not allowed
accountEmail = "200020026@gmail.com"
accountPassword = "654321"
accountCity = "Banglore"

console.log(accountID);

/* prefer not to use var because of issue in
block scope and functional scope */

console.table([accountID, accountEmail, accountPassword, accountCity]);