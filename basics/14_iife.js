// Immediately invoked function expression IIFE.
// IIFE is a function that is executed immediately after it is created.
//IIFE is used to avoid pollutiion caused by global scope


//named IIFE
(function printName() {
    console.log("DB connected");
})();   // here ; is mandatory to tell JS that function has been ended here., If we don't give ; then JS will give error while executing the other IIFE. so, if we have more tahn 1 IIFE then ; is mandatory.

//()()  Syntax for IIFE

//Un named IIFE
(() => {
    console.log(`Db connected two`);
})();


((name) => {
    console.log(`DB connected ${name}`);
    
})(`Sujeet`)