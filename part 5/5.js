// let btn1 = document.createElement("butn1");

// // //btn1.onclick - (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.currentTarget);
// //     console.log(evt.target);
// //     console.log(evt.clientX);
// //     console.log(evt.clientY);
// // };

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// //if we have to remove one handler or anyone functionin future then we store the function in a variable
// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// };
// btn1.addEventListener("click", handler3);
// btn1.removeEventListener("click", handler3);




let mode = document.querySelector("#mode");
let curMode = "light"; // default mode

if (mode) {
    mode.addEventListener("click", () => {
    if (curMode === "light"){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else {
        curMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    });
}

