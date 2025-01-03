// JS exeution conetxt meeaning::: HOW JS engine will run the code iside a file

// JS engine makes 2 execution context from codes:: 1. Global execution context(this conext is stored in this conext) 2. Functional execution context
// these is another execution context called eval execution context.(This is less important, so we will not discuss it here)

//engine runs in 2 phase. 1. Creation phase(Memory creation phase), memory is assgned to variables 2. Execution phase =,- operations are executed.


// in 15_call_stack.png, three(), two() and one() can be independent functions or three() can be called inside two() and two() can be called inside one().

//we can directly create .js file in source-> snippets  and can see call stack and scope etc.  see in the video for more details.

//use below code to create js file in browser and  understand call stack and scope etc.
function one() {
    console.log('one')
    two()
}
function two() {
    console.log('two')
    three()
}
function three() {
    console.log('three')
}

one()
two()
three()