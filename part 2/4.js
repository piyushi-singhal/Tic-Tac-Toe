//ARRAYS LECTURE -4


let mark5= [55,66,,77,88,99];
console.log(mark5);// [55, 66, <1 empty item>, 77, 88, 99]
console.log(mark5.length);//property //6
console.log (mark5[2]);//undefined //empty item
console.log (mark5[3]);//77

for (let idx = 0; idx < mark5.length; idx++){
    console.log(mark5[idx]);//55 66 undefined 77 88 99
}
//undefined is not an error, it is a value


//FOR OF LOOP
for(let mark5 of mark5){
    console.log(mark5);//55 66 undefined 77 88 99
}

let names = ["John", "Doe", "Jane", "Smith"];
for(let name of names){
    console.log(name.toUpperCase()); // JOHN DOE JANE SMITH
}

//PRACTICE QUESTION: For a given array with marks of students [85, 97, 44, 37, 76, 60]. Find average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum5= 0;
for(let val of marks){
    sum5+= val;
}

let avg = sum5/marks.length;
console.log(`Average marks of the class = ${avg}`); // Average marks of the class is 66  


//SLICE METHOD
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits.slice(1, 3)); //["banana", "cherry"]
console.log(fruits.slice(2)); //["cherry", "date", "elderberry"]
console.log(fruits.slice(-2)); //["date", "elderberry"]

//SPLICE METHOD
let fruits2 = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits2.splice(1, 2, "kiwi", "mango")); //["banana", "cherry"]
console.log(fruits2); //["apple", "kiwi", "mango", "date", "elderberry"]
fruits2.splice(1,0,"orange"); //insert "orange" at index 1
console.log(fruits2); //["apple", "orange", "kiwi", "mango", "date", "elderberry"]
console.log(fruits2.splice(3)); //["mango", "date", "elderberry"]
console.log(fruits2); //["apple", "orange", "kiwi"] //remaining elements are removed 