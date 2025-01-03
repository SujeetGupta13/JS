// To change same text at mutiple places, use keywrd ctrl + D
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr[9]); //undefined

for (let id = 1; id <= 20; id++) {
    if (id == 5) {
        console.log(`Detected ${id}`);
        break;
    } 
    console.log(`Id is ${id}`);
}
for (let id = 1; id <= 20; id++) {
    if (id == 5) {
        console.log(`Detected ${id}`);
        continue;
    } 
    console.log(`Id is ${id}`);
}

let index = 0
while (index <= 10) {
    console.log(`Index is ${index}`);   
    index = index + 2
}

let myArr =["Sujeet", "Kumar", "Sinha"] 
let i = 0
while( i < myArr.length) {
    console.log(`Name is ${myArr[i]}`);
    i = i + 1
}

let score = 10;
do{
    console.log(`Score is ${score}`);
    score = score + 10
}while((score <= 100))

let score2 = 10;
do{
    console.log(`Score is ${score2}`);
    score2 = score2 + 10
}while((score2 <= 10))