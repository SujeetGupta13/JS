"use strict"; //treat all JS code as newer JS verison

// alert(3 + 3) // alert doesn't work in nodejs, worksin browser

console.log( 3 
    +
     3) // not recommended, code readability shud be high

console.log( "Sujeet") 
console.log("asdf")
// https://tc39.es/ecma262/#sec-scope  // ECma script provides standdard for Java script. diff browser provides implementataion like MDN by mozilla.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

let name = "Sujeet"
let age = 25
let isLoggedIn = true

//number => range bw 2 to power 53
//bigint
//string => "" // '' can be used too, but prefer uisng ""
// boolean 
let fname =  null
// null // it is a special object type and hold a standalone value that is null; null means empty value not string wala empty. bcz that was type of String.
let lname;
// undefined
// Symbol ///is is used to define uniquness and usecase is in react when we want to diff bw components

//object

console.log(typeof "Sujeet")
console.log(typeof null)        // object in JS, null is a type of object.  
console.log(typeof undefined)  // undefined
