if( 2 == '2'){
    console.log(`== is used for value comparison only`);
}
if( 2 === '2'){
    console.log(`=== is used for value and type comparison`);
}
if( 2 != '2'){
    console.log(`!= is used for value comparison only`);
}
if( 2 !== '2'){
    console.log(`!== is used for value and type comparison`);
}

if(true) console.log("hello"); // implicit way of wrting single line of code after if block. ; makes it readable
if(true) console.log("first line"), 
         console.log(`2nd line`);  // using , we can make it in multiple line, but this is not a good practice.

///////// Switch case //////////////
// const key = 1;
// switch (key) {
//     case value1:
//         console.log(`value is ${value}`);
//         break;
//     case value2:
//         console.log(`value is ${value2}`);
//         break;
//     default:
//         console.log(`value is not matching`);
//         break;
// }

const month = 1;
switch (month) {
    case 1:
        console.log(`month is January`);      
        //break;
    case 2:
        console.log(`month is February`);      
        break;
    case 3:
        console.log(`month is March`);      
        break;
    default:
        console.log(`month is not matching`); 
        break;
}

///// Truthy and Falsy values //////

const userEmail = "s@gmail.com"
if (userEmail){
    console.log(`Email is ${userEmail}`);
}
else{
    console.log(`Email is not provided`);
}

const userEmail2 = ""
if (userEmail2){
    console.log(`Email is ${userEmail}`);
}
else{
    console.log(`Email is not provided`);
}

// Falsy value  :: false, 0, -0, BigInt 0n, null, undefined, NaN, "", '', ``
// Truthy value :: true, 1, -1, BigInt 1n, "0", "false", "null", "undefined", "NaN", " ", "  ", ` `, `  `, [], {}, function() {}

const user = {}
if (Object.keys(user).length === 0){
    console.log(`User array is Empty`);
}



////// Nullish coalescing operator ////// this is used for fallback when we get any kind of error from DB or any API etc.
let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 20
let val4 = null ?? 30 ?? 40

console.log(`val1 is ${val1},  val2 is ${val2},  val3 is ${val3},  val4 is ${val4}`); // val1 is 5,  val2 is 10,  val3 is 20,  val4 is 30

///////////Ternaary operator////////////

// condition ? true : false
const age = 20
age > 18 ? console.log(`Age is ok ${age}`) : console.log(`Age is less than 18 provided`)
