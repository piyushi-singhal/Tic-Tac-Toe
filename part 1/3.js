//LOOPS

for (let i=1; i<=5; i++){
    console.log("Hello!");  //Printing value of i
}
console.log ("Loop has ended");  //Printing value of i after loop has ended

//Calculate sum of first 5 numbers
let sum = 0;
for (let i = 1; i <=5; i++){
    sum = sum + i;
}
console.log ("Sum = ", sum);  //Printing value of sum

//Calculate sum of 1 to 100
let addition = 0;
let n = 100;
for (let i = 1; i <=n; i++){
    addition = addition + i;
}
console.log ("Sum = ", addition);  //Printing value of sum


/*INFINITE LOOPS
 for (let i = 1; i >=0; i++){
    console.log("Hello!");  //Printing value of i
}
*/ 

//while loop
let i = 1;
while(i <= 5){
    console.log("Hello!");  //Printing value of i
    i++;
} 

//do-while loop
let j = 20;
do{
    console.log("Hello!");
    i++;
}while(j <= 5);  //Printing value of j

// //FOR-OF LOOP
// let str = "Hello!";
// let size = 0;
// for(let k of str){
//     console.log ("k=", k);  //Printing value of k
//     size++;
// }
// console.log("String size=", size); //6

//FOR-IN LOOP
let studen2 = {
    name: "Piyushi",
    age: 19,
    cgpa: 8.52,
};
for(let key in studen2){
    console.log(key);  //Printing value of m
    console.log("key= ",key, "value= ", studen2[key]);  //Printing key and value of object
}




//STRINGS
let str = "Hello!";  //String declaration
str.length;  //Length of string
console.log(str[0]);  //Printing first character of string //H

//Special string //Template Literals
let obj = {
    item: "pen",
    price: 10,
};
let output = `The cost of ${obj.item} is ${obj.price} ruppees`;  //It is short way to write console.log("The cost of " + obj.item + " is " + obj.price + " ruppees");
console.log(output);  //Printing template literals
//The cost of pen is 10 ruppees
  