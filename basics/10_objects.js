//Singleton object     ne Object() 

//Object Lietrals
//const user = {} // Empty object


//In Below code, JS cosider all keys like name, age etc like string.ex name is considered as 'name' 

const mySymbol = Symbol('123');
const mySymbolLocation = Symbol('Mumbai');
const user = {
    name: 'Sujeet',
    age: 25,
    email: 'abc@gmail.com',
    "full name": 'Sujeet Gupta', // if we have space in key, then we need to use quotes.
    mySymbol: '12345',
    [mySymbolLocation]: 'Bangalore',
}

console.log(user.age);  // 25 , Not preferred way
console.log(user['age']); // 25, preferred way
console.log(user['full name']); // Sujeet Gupta, because of this resons, we should use quote to access values.
console.log(user.mySymbol); // 12345, it is not considering mySymbol as Symbol, it is considering it as string.
console.log(typeof user['mySymbol']); 
console.log(user[mySymbolLocation]); // Bangalore, it is considering mySymbol as Symbol.
console.log(typeof user[mySymbolLocation]); // string
console.log(typeof mySymbol);

console.log(user);
user.age = 26;
console.log(user)
Object.freeze(user); // it will make object immutable. we can't add new key value pair or update existing key value pair.
user.age = 27;
console.log(user);

const user2 = { 
    name: 'Sujeet',
    age: 25,
    email: 'hbhb@njk'
}
user2.greeting = function() {
    console.log(`Hello JS user2`);
}
user2.greeting2 = function() {
    console.log(`Hello JS user2 , ${this.name} `);
    
}
console.log(user2.greeting); //it retunrs function reference

console.log(user2.greeting());
console.log(user2.greeting2());


/////  const obj ={}, and const obj = new Object() are same.//output {}
const instaUser = {}
instaUser.name = 'Sujeet'
instaUser.age = 25
instaUser.email = 'heelo@'
console.log(instaUser);

const instaUser2 = {
    email: 'hell@m',
    fullName: {
        userFullname: {
            fname: 'Sujeet',
            lname: 'Gupta'
        }
    }
}
console.log(instaUser2);
console.log(instaUser2.fullName.userFullname.fname);



const obj1 = {a: '1', b: '2'}
const obj2 = {c: '3', d: '4'}
const obj3 = {obj1, obj2}
const obj4 = {...obj1, ...obj2} // This is the most used way to merge two objects. it is called spread operator.
const obj5 = Object.assign({}, obj1, obj2)  // it is used to merge two objects and create a new object. first argument is target object and rest are source objects.
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj1);
console.log(obj2);

console.log('\n');

const obj6 = {a: '1', b: '2'}
const obj7 = {c: '3', d: '4'}
const obj8 = Object.assign(obj6, obj7)  // it is used to merge two objects and create a new object. first argument is target object and rest are source objects.
console.log(obj8);
console.log(obj6);
console.log(obj7);

console.log('\n');
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('name')); // true


// Object Destructuring and Json API  .Array destructuring concept is also in JS.
const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "hitesh"
}
console.log('Object Destructuring and Json API \n');

const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);


////Destructuring concept in React for reference ////
const navbar = ({company}) => {

}
navbar(company = "sujeet")
//////

/// API///
//This is Json API response. key also needs to have quotes. We get the Json respons ein this format.
//ex 1
{
   // "name": "Sujeet",
   // "age": 25,
   //"city": "Gaya"
}
//ex 2
[
    {},
    {},
    {}
]


















