const myNums = [1, 2, 3, 4, 5];

const newNums = myNums.filter((num) => num > 3);
console.log(newNums);
const newNums2 = myNums.filter((num) => {
  return num > 3;
});
console.log(newNums2);

///////////
const nums = [];
myNums.forEach((num) => {
  if (num > 3) {
    nums.push(num);
  }
});
console.log(nums);

///////////////map//////////////////

const myNumbers = [1, 2, 3, 4, 5];
const newNumbers = myNumbers.map((num) => num + 10);
console.log(newNumbers);

const newNumbers2 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num >= 30);
console.log(newNumbers2);


////////////// Reduce //////////////
const numbers =  [1, 2, 3, 4]

const initialvalue = 5
 const myTotal = numbers.reduce( function (accumulator, currVal){ // accumulator starts with initialvalue
    console.log(`accumulator: ${accumulator} and currval : ${currVal}`);
    return accumulator + currVal
 }, initialvalue)
console.log(myTotal);

const myTotal2 = numbers.reduce( (acc, currValue) => acc + currValue, initialvalue)
console.log(` Total value with Arrow function is : ${myTotal2}`);


const shoppingCart = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "py",
        price: 3999
    },
    {
        itemname: "java",
        price: 2999
    },
]

const shopingPrice  = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(shopingPrice);

