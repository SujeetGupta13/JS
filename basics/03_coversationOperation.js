let score = 123
let score2 = "123"
let scoreInteger2 = Number(score2)
let score3 = "123abc"
let scoreInteger3 = Number(score3) 

console.log(typeof score)
console.log(typeof(score))
console.log(typeof(scoreInteger2))
console.log(typeof score3)
console.log(typeof(scoreInteger3))  // output:: number   this is a problem in JS. So, people use TS
console.log(scoreInteger3)
console.log("/n");

let score4 = NaN
let score5 = Number(score4) 
console.log(typeof(score4))
console.log(score5)
let score6 = Number(null)
console.log(score6);
let score7 = Number(undefined)
console.log(score7);
let scope8 = true;
console.log(Number(scope8));

console.log("Boolean concept")
let isLoggedIn = 1
let booleanLoggedin = Boolean(isLoggedIn)
let booleanLoggedin2 = Boolean("isLoggedIn")
let booleanLoggedin3 = Boolean("")

console.log(booleanLoggedin);
console.log(booleanLoggedin2);
console.log(booleanLoggedin3);

console.log("Strnig concept")
let someNumber = 33
let someString = String(someNumber)
console.log(someString);
console.log(typeof(someString));


// *********** Operations **************//
console.log("Operations");

let value = 3
let negValue = -value
console.log(negValue);
console.log(2**3);
console.log(2/3);
console.log(2%3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log(true);
console.log(+true);
console.log(+"");



