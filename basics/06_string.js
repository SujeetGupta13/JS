const myName = "Sujeet"
const count = "50"

console.log("Hello my name is " + myName + " and my count is " + count + " value"); // This is old way of doing string concatenation. not preferred

console.log(`Hello my name is ${myName} and my count is ${count} value`); // `` is called backt ticks and this way of 
// string concatenation is called string interpolation

console.log(`Hello my name is ${myName.length} and my count is ${count} value`); // we can use string method in this case also. 

const string2 = new String('sujeet-SG') //Another way of declaring string object. it is like key value pair. key is index and value is characters.
console.log(string2);

console.log(string2[1]); // u
console.log(string2.__proto__); // {}    // prototype containes all string methods. {} denotes that it has properties.

console.log(string2.toUpperCase()); //SUJEETSG
console.log(string2.toUpperCase);   // [Function: toUpperCase]
console.log(string2.charAt(1));

console.log(string2.indexOf('e')); // 3

const newString = string2.substring(0, 6) // if we give - value for staring index, it will ignore and will use 0 index.
console.log(newString);

const newString2 = string2.slice(0, 6)
console.log(newString2);

const newString3 = "   Hello.  \n  "

console.log(newString3);
console.log(newString3.trim());

const url = "https://www.google.com/sujeet%20gupta"
console.log(url.replace('%20', '-')); // only replaces first occurance
console.log(url.includes('sujeet'));

console.log(string2.split('-')); // [ 'sujeet', 'SG' ]





