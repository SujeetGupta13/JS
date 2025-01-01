const arr = [1, 2, 3, 4, 5] // JS arrays are resizeable and can hold any type of data.
const arr2 = new Array(2, 4, 6, 8, 10) // Another way to create an array.
const arr3 = ["Shaktiman", "Superman", "Batman", "Spiderman", "Ironman", 12, true]

console.log(arr3[3]); 
console.log(arr3.__proto__.__proto__); // [Object: null prototype] {}  Arrays prototype chain has sub prototype.

// Array methods
arr.push(6) // 
console.log(arr);
arr.pop() // Removes the last element from the array.
console.log(arr);
arr.unshift(9) // Adds an element at the beginning of the array. time consuming as shfts all elements.
console.log(arr);
arr.shift() // Removes the first element from the array. time consuming as shfts all elements.
console.log(arr);

console.log(arr.includes(3)); // true
console.log(arr.indexOf(8)); // -1

const newArr = arr.join('-') 
console.log(newArr);
console.log(arr.join());
console.log(typeof newArr); // string

/// Slice and Splice
console.log('Original Array ', arr);

const myA1 = arr.slice(1, 3) // 2, 3
console.log(myA1);
console.log('Original Array ', arr);

const myA2 = arr.splice(1, 3) // 2, 3, 4
console.log(myA2);
console.log('Original Array ', arr);

console.log('\n');

const heroes = ["Shaktiman", "Superman", "Batman",]
const villains = ["Joker", "Thanos", "Loki", "Venom"]
const heroins = ["Wonder"]
const heroins2 = ["Wonder2"]

const all = heroes.push(villains) // returns next index of the array.
console.log(heroes);
console.log(all);
console.log(heroes[3][2]); // Loki
console.log('\n');

const all2 = heroins.push(...villains) // returns next index of the array.
console.log(heroins);
console.log(all2);
console.log('\n');

const all3 = heroins2.concat(villains) // returns a new array.
console.log(heroins2);
console.log(all3);
console.log(villains);
console.log('\n');

const all4 = [...heroins2, ...villains] // returns a new array.
console.log(all4);
console.log('\n');

const all5 = [1, 2, 3 , [4, 5, 6], [7, 8, [9, 10]]];
const all6 = all5.flat(1)
console.log(all6);
console.log(all5.flat(Infinity));

console.log('\n');  
console.log(Array.isArray(all5)); // true
console.log(Array.isArray('Sujeet')); // false
console.log(Array.from('Sujeet')); // [ 'S', 'u', 'j', 'e', 'e', 't' ]
console.log(Array.from({name: 'Sujeet'})); // [] // we will have to speicify whether we want array form key or value, otherwise it will retrun empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]);

















