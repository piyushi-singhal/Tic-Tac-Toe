console.dir(window.document);
console.dir(document.body);
console.dir(document.head);
console.dir(document.body.childNodes[1]);

let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);

let headings2 = document.getElementsByTagName("h1");
console.dir(headings2);
//Query selector
let elements = document.querySelector("p");
console.dir(elements);


//Practice question 1: 
let h2 = document.querySelector("h2"); // access the element using querySelector
console.dir(h2.innerText);
h2.innerText = h2.innerText + "Welcome"; //Change the text of the h2 element


//Practice question 2:

let divs = document.querySelectorAll(".box");//accessall the div elements using querySelectorAll
divs[0].innerText = "new uniques value 1"; //Change the text of the first div element


let idx = 1; // index of the div element to change
for(div of divs){
    div.innerText = `new uniques value ${idx}`; //Change the text of the div element
    idx++;
}