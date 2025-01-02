let boxes = document.querySelectorAll(".innerbox");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let winnermsg = document.querySelector(".winner");

let turnO = true ; 
let winpattern = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8]
,[0,4,8]
,[2,4,6]
];




boxes.forEach((box)=> {
    box.addEventListener("click" , () => {
        console.log("button was clicked");
        if(turnO){
            box.innerText= "O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true; 
        }
        box.disabled=true;
        
        checkwinner();
    });
});


const resetgame = () => {
    turnO = true; 
    enbtn();
    winnermsg.classList.add("hide");
}


const showwinner = (winner) => {
    winnermsg.innerText= (`Congratulation the ${winner} is the Winner`);
    winnermsg.classList.remove("hide");
}

const disbtn = () => {
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enbtn = () => {
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

const checkwinner = () => {
    for (const pattern of winpattern ) {
         let pso1Val = boxes[pattern[0]].innerText;
            let pso2Val = boxes[pattern[1]].innerText;
            let pso3Val = boxes[pattern[2]].innerText

            if(pso1Val !="" && pso2Val !=" " && pso3Val != ""){
                if(pso1Val===pso2Val && pso2Val===pso3Val){
                    console.log("winner");
                    showwinner(pso1Val);
                    disbtn();
                }
           }
    }
}

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);