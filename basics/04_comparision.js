console.log("2" > 1); //automatic tyoe conversion done by JS. but thisis a bad practice. always do comparision bw same data type elements. 
console.log("02" > 1);

console.log( null > 0); //Avoid these type of comparisions
console.log( null == 0);
console.log( null >= 0); // in JS equality check(==) and comparisions(<,<=,>,>=) work diff. comparisions converts null into a Integer.

console.log( undefined > 0);//Avoid these type of comparisions
console.log( undefined == 0);
console.log( undefined >= 0);

console.log("2" == 2);
console.log("2" === 2); //in this case datatype is diff, so conversion not happens.
