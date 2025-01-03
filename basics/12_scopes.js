var c = 300
let a = 50
const b = 90
if(true){
    let a = 100
    const b = 200
    var c = 400
    console.log(`block scope value of a, band c is ${a}, ${b}, ${c}`);
}
// {} is scope in JS id used with functions, if and alone
// any varaible declared inside {} is called block scope and varaible declared outside {} is called global scope.

console.log(a);
console.log(b);
console.log(c);

// Global scope in browser window and global in node is diff.


// function can be defined inside function, loop, or if-else block
function one() {
    const userName = "Sujeet"

    function two() {
        const website = 'youtube'
        console.log(userName);
    }
    //console.log(website); //website can not be accessed here as it is block scope.
    two()
}

one()


if(true){
    const username2 = "Sujeet"
    if(username2 === "Sujeet") {
        const password = "1234"
        console.log(`Username is ${username2} and password is ${password}`);
    }
   // console.log(password); //password can not be accessed here as it is block scope.
}
//console.log(username2); //username2 can be accessed here as it is global scope.


console.log(`Before declaring call is being made for addOne function: ${addOne(5)}`);
function addOne(num) {
    return num + 1
}
console.log(`After declaring call is being made  for addOne function: ${addOne(5)}`);

//console.log(`Before declaring call is being made for addTwo function: ${addTwo(5)}`); // When function defination is assgned to a variable, then it can't be accessed before declaration.
const addTwo = function(num) {
    return num + 2
}
console.log(`After declaring call is being made for addTwo function: ${addTwo(5)}`);
