//FUNCTION TYPE 1   [function functionnName(){}]

function myFunction() {
    console.log("Hello!");
  }
  myFunction(); // Call the function
//OUTPUT: Hello!

function myFunction2(msg) { //parameter -- input
    console.log(msg); //output
}
myFunction2("Hello!"); // Call the function with a message //Argument

//Function sum
function sum(x,y){ //x, y are local variables of the function and are defined in scope only
  s = x + y;
  return s; //return value //console.log(x + y);
}

let val = sum(2, 3); // Call the function with two numbers
console.log(val); //OUTPUT: 5 


//FUNCTION TYPE 2  [function functionName(parameter1, parameter2) { return value; }]
//here the parameter that are defined are known as fixed parameters and acts as local variable of the function and works in block scope only 

//ARROW FUNCTIONS  //Mordern JavaScript
const mul = (a,b) =>  {
    return a*b; //return value
}
console.log(mul(2,3)); //OUTPUT: 6

//Print one line code using arrow function
const print = () => console.log("Hello!"); //no parameter
print(); //OUTPUT: Hello!


//PRACTICE EXAMPLE 1: Count number of vowels in a string
function countVowels(str){
    let count = 0;
    for (const char of str){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}
//Same question but using arrow function
const countVow = (str) => {
        let count = 0;
        for (const char of str) {
          if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
          ) {
            count++;
          }
        }
    return count;
}


//forEach Loop
let arr = ["Jaipur", "Chennai", "Bombay", "Pune"];
arr.forEach (function printVal(val){ //each value at eachh index
    console.log(val);
});//OUTPUT: Jaipur Chennai Bombay Pune

//forEach Loop with Arrow Function
arr.forEach((val) => console.log(val.toUpperCase(), arr)); 


//MAP ARRAY METHOD
let nums = [1, 2, 3, 4, 5];
let newArr = nums.map((val) => {
    return val * val; //square of each value
});
console.log (newArr); //OUTPUT: [1, 4, 9, 16, 25]
console.log(nums); //OUTPUT: [1, 2, 3, 4, 5] //original array is not changed

//FILTER ARRAY METHOD 
let nums2 = [1, 2, 3, 4, 5];
arr.filter((val) => {
    return(val % 2 === 0); //even numbers
}); //OUTPUT: [2, 4] //new array is created with even numbers only

//REDUCE ARRAY METHOD
let nums3 = [1, 2, 3, 4, 5];
let sum2 = nums3.reduce((res, val) => {
    return res + val; //sum of all values
});
console.log(sum2); //OUTPUT: 15 //sum of all values in the array


//To find largest element in an array using reduce method
let nums4 = [1, 2, 3, 4, 5];
let output = arr.reduce ((prev, curr) => {
    return prev > curr? prev : curr; //largest element
});
console.log(output); //OUTPUT: 5 //largest element in the array