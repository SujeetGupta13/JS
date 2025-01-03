// loop/iterator can be applied on array, objects, string etc.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const num of arr) {
    console.log(`numbers are ${num}`);
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('name', 'Sujeet')
map.set('age', 25)
map.set('email', 'abc@.com')
map.set('name', "Siya")
console.log(map);

for (const key of map) {
    console.log(key);   
}
for (const key of map) {
    console.log(`key is ${key}`);
       
}
for (const key of map) {
    console.log(`key is ${key[0]} and value is ${key[1]}`);
       
}
for (const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`);
    
}


///////////////////********************///////////////
const mygame = {
    game1:  'NfS',
    GAME2: 'SPIDERMAN'
}

// for (const key of mygame) {  //This for of deosn't work for Objects
//     console.log(key);  
// }
console.log();

for (const key in mygame) {
   console.log(`${key} shortcut is for ${mygame[key]}`);
}

const programing = ["js", "ruby", "Java"]
for (const key in programing) {
    console.log(`${key} is for ${programing[key]}`);
    
}

const map2 = new Map()
map.set('name', 'Sujeet')
map.set('age', 25)

for (const key in map2) {  //will not print anything on console and will give any error as well., but with map, forin iteration not possible.
    console.log(key);
}

///// Foreach /////
const coding = ["js", "java", "ruby"]
console.log("For each callback function");

coding.forEach(function (item) {   // forEach asks for a callback function, which will be executed for each item of array. we dont give name to this function.
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

console.log();

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe) // we have to pass reference , then forEach will make a call to function . If we do like printMe(), then it will give error.

coding.forEach( (item, index, arr) => { // apart from ietm, we can access index, and entire array in call back functioon.
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
    
})
