function addTwoNumbers(number1, number2) { //number1 and number2 are parameters
  console.log( number1 + number2);
}

addTwoNumbers // it will nod do anything, as we are not calling the function. its just a reference.
addTwoNumbers() // it will give NaN, as we are not passing any value.
addTwoNumbers(2, 3) // 5 2,3 are arguments.
addTwoNumbers(2, '3') // 23
addTwoNumbers(2, null) // 2
addTwoNumbers(2, undefined) // NaN
addTwoNumbers(2, true) // 3
addTwoNumbers('2', true)  //2true
addTwoNumbers('2', null) // 2null

function loginUserMessage(userName){
    if(userName === undefined){  // if(!userName) will also work, as undefined is falsy value.
        console.log('Please provide a valid username');
        return
    }
    return `${userName} has just logged in`
}
console.log(loginUserMessage('Sujeet'));
console.log(loginUserMessage());

function loginUserMessage2(userName){
    if(!userName){  // if(!userName) will also work, as undefined is falsy value.
        console.log('Please provide a valid username2');
        return
    }
    return `${userName} has just logged in`
}
console.log(loginUserMessage2('Sujeet'));
console.log(loginUserMessage2());

function loginUserMessage3(userName = "Siya"){ //if value is not provided then default value will be Siya
    if(!userName){  
        console.log('Please provide a valid username3');
        return
    }
    return `${userName} has just logged in`
}
console.log(loginUserMessage3('Sujeet'));
console.log(loginUserMessage3());

//////////////////////
function calculateCartPrice(...num1){  // ... is called Rest Operator as well as spread operator. but both diff use cases.
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500));

function calculateCartPrice2(val1, val2, ...num1){  // ... is called Rest Operator as well as spread operator. but both diff use cases.
    return num1
}
console.log(calculateCartPrice2(200, 300, 400, 500));

const user = {
    userName: 'Sujeet',
    price: 1999,
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({userName: 'Siya', price: 999})

const myNewArray = [200, 300, 400]
function returnSecondvalue(array) {
    return array[1]
}
console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200, 900, 400]));

