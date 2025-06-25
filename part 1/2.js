let a = 5;
let b = 10;
let c = a + b;  //Addition
console.log(c);  //Printing addition result
console.log(a - b);  //Printing result without variable
console.log("a = ", a, "&b = ", b);  //Printing variable value
console.log(a*b);  //Multiplication
console.log(a/b);  //Division
console.log(a%b);  //Modulus (value of remainder)
console.log(a**b);  //Exponentiation
console.log(a++);  //Increment operator (postfix) (a+1=a) first print a then increment
console.log(a);  //Printing incremented value of a
console.log(++a);  //Increment operator (prefix) (a+1)
console.log(a--);  //Decrement operator (postfix) (a-1)

a += 4; //Addition assignment operator (a+4=a) (a=9)
console.log(a);  //Addition assignment operator (a+4=a)

console.log(a==b);  //Equality operator (a==b) (false)
console.log(a!=b);  //Inequality operator (a!=b) (true)


/* Interesting fact:
a = 5;  number
b = "5";  string
console.log(a==b);  //Equality operator (a==b) (true) 
though we are comparing number and string, it will convert string to number and then compare
console.log(a===b);  //Strict equality operator (a===b) (false)*/


let x = 5; 
let y = 6; 
let cond1 = x < y; //true
let cond2 = x === 5; //true
console.log("cond1 && cond2 =", cond1 && cond2); //Logical AND operator (true && true = true)
console.log("cond1 && cond2 =", x < y && x === 5); //Logical AND operator (true && true = true) (same as above and in this we dont have to justify the value of cond1 and cond2)
console.log("cond1 || cond2 =", cond1 || cond2); //Logical OR operator (true || true = true)
console.log("cond1 || cond2 =", x < y || x === 5); //Logical OR operator (true || true = true) (same as above and in this we dont have to justify the value of cond1 and cond2)
console.log("!cond1 =", !cond1); //Logical NOT operator (false)
console.log("!cond2 =", !cond2); //Logical NOT operator (false)


//Conditional statements 
let age = 16;  //Variable declaration
if (age > 18){
    console.log("you can vote");                //if condition is true then this will execute
}
if (age < 18){
    console.log("you cannot vote");             //if condition is false then this will execute
}

let color;
let mode = "light-mode"; // Initialize mode with a value
if (mode === "dark-mode"){ //ifelse statement
    color = "black";
}else{
    color = "white";
}
//odd or even number 
let num = 7;
if (num % 2 === 0){
    console.log(num, "is even number");  //if condition is true then this will execute
}else{
    console.log(num, "is odd number");   //if condition is false then this will execute
}

//Ternary operand 
let time = 25;
time >= 18 ? console.log("Adult") : console.log("Minor"); //if condition is true then this will execute else false


//Prompt 
let fine = prompt("Enter the fine amount"); //Prompt statement to take input from user
console.log("Fine amount is: ", fine); //Printing fine amount

//ALert
alert("This is an alert message"); //Alert statement to show alert message


/*
Practice Question:

let num = prompt("Enter a number");
if(num % 5 === 0){
console.log(num, "is a multiple of 5");
}else{
console.log (num, "is NOT a multiple of 5")
}
*/