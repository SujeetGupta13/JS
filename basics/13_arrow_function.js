// To understand Arrow function, we need to understand this keyword and to uderstand this keyword, we need to under stand Object.
// this keyword refers about current context, where it is being used.

const user = {
    username: "Sujeet",
    price: 1999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`);
        
    }
}
// in the above Object declaration, current context refers everything inside the object curly braces.
user.welcomeMessage()
user.username = "Siya"
user.welcomeMessage()
console.log();

const user2 = {
    username: "Sujeet",
    price: 1999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`);
        console.log(this);  
        
    }
}
user2.welcomeMessage()  
user2.username = "Siya"
user2.welcomeMessage() 
// output ::    {
                //username: 'Siya',
               // price: 1999,
               // welcomeMessage: [Function: welcomeMessage] //here it retuneed the function reference
              //}
console.log();              
console.log(this); // it will return empty object {}, as it is not inside any object. and we are in node(JS engine) environment. not browser. in browser it will return window object.
// Window object is the global object in a browser, and it can be accessed using the window keyword.
console.log();

function chai() {
    const userName = "Sujeet"
    console.log(this); //here this is used inside function. see the console output to understand the context.
    console.log(this.userName); //undefined, this keyword is not working as expected inside function.
    
}
chai()


/////////////////////// Arrow function//////////////////
console.log("Arrow function example");

const chai2 = function() {
    let userName = "Sujeet"
    console.log(this); //here this is used inside function. see the console output to understand the context.
    console.log(this.userName); //undefined, this keyword is not working as expected inside function.
}
chai2()
console.log();

// To create an arrow function, Remove function keywrd and add => after the parameter list.
const chai3 = () => {
    let userName = "Sujeet"
    console.log(this); // IN arrow function, it will return empty object {}  
    console.log(this.userName); //undefined, this keyword is not working as expected inside function.   
}
chai3()


const chai4 = (num1, num2) => {
    return num1 + num2
}
console.log(chai4(2, 3));

// Implicit retrun in arrow function
const chai5 = (num1, num2) => num1 + num2 // if we have only one line of code then we can remove return keyword and curly braces. 
console.log(chai5(2, 3));
const chai6 = (num1, num2) => ( num1 + num2 ) // we can use paranthesis to make code more readable. but if we use {}, then retrun keywrd is mandatory.
console.log(chai6(2, 3));

const chai7 = (num1, num2) => {userName: "Sujeet"} // it will return undefined, as it is not returning anything.
console.log(chai7(2, 3));
const chai8 = (num1, num2) => ({userName: "Sujeet"}) // it will return object {userName: "Sujeet"}, as it is returning object.
console.log(chai8(2, 3));


const myArray = [2, 5, 6, 8]
myArray.forEach(function(num) {  // here arguemnt to forEach is callback function, which exceutes for each array value.
    console.log(num);
})
myArray.forEach(  (num) => {console.log(num);
})
myArray.forEach( (num) => console.log(num)
)


