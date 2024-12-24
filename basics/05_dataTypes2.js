// Primitive :  call by value, copied value is passed not memeory address.
// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
// const score2:number = 200 // TS var declaration
const scoreValue = 100.3
const isLoggedIn = true
const nullvalue = null
let undefinedValue

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(typeof id);


const numberValue = 1234901234567
const bigIntValue = 1234567890123456789012345678n
console.log(typeof bigIntValue);


//Reference (Non Primitive)
// Array, Objects, Functions

const names = ['Sujeet', 'Gaurav', 'Saurav'];
let myObject = {
    name: 'Sujeet',
    age: 25
}

function printName(name) {  // Here we have function defination
    console.log(name);
}

const printName2 = function(name) {  //function can be stored in a variable.
    console.log(name);
}
printName('Sujeet')
printName2('Sujeet Object')

console.log(typeof(names));
console.log(typeof(myObject));
console.log(typeof(printName));

// ************** Stack and Heap ***************

// Stack : Primitive data types are stored in stack.
// heap : Non Primitive data types are stored in heap.

let myname = 'Sujeet'
let anotherName = myname
anotherName = 'Gaurav'
console.log(myname);
console.log(anotherName);

let userOne = {
    name: 'Sujeet',
    age: 25
}
//Here Object was created in Heap , but reference was stored in stack i.e, userOne variable was created in stack and 
// it is hodling the reference of Object created in heap.

let usertwo = userOne;
usertwo.name = 'ravi'
console.log(userOne.name);
console.log(userOne.name);



