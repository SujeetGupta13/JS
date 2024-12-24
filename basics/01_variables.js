const accountId = 12345
let accountEmail = "sujeet@gmai.com"
var accountPassword = "121212" // Prefer to not use var type declaration, because of block and functional Scope issues.
{
    var accountPassword = "989898"
    let accountEmail = "gs@gmail.com"
}
accountCity = "Gaya" //This is ok , but perfer to not declare varibale like this.
let accountState;   // Nothing is assigned, So it has undefined value. ; is optional in JS

// accountId = 2 //not allowed

accountEmail = "sg@gmail.com"
// accountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
