let boxes = document.querySelectorAll(".box");
let Reset = document.querySelector(".Reset");
let newbtn = document.querySelector(".New");
let msgContainer = document.querySelector(".msg");

let turnO = true;
const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
}); 

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let post1 = boxes [pattern[0]].innerText;
        let post2 = boxes [pattern[1]].innerText;
        let post3 = boxes [pattern[2]].innerText;
        if (post1 === "" && post2 === "" && post3 === "") {
            if (post1 === post2 && post2 === post3) {
                console.log("Winner", post1);
            }
        }
    }
}