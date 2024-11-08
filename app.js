let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = document.querySelectorAll(".design");
let allBtns = ["green", "blue", "red", "yellow"];

document.addEventListener("keypress", function(event){
    if(event.key == "Enter" && started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}
function levelUp(){
    level++;
    h3.innerText = `level ${level}`;
    userSeq = [];
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = allBtns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);

    gameFlash(randBtn);
}


function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 500);
        }
    } else {
        h3.innerText = `better luck next Time (Your Score = ${level})`;
        resetCode();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

for(i of btns){
    i.addEventListener("click", btnPress);
}

function resetCode(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}