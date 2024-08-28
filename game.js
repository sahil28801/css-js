let userscore=0;
let computerscore=0;

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#com-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const gencompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawgame=() => {
    msg.innerText="game draw ,play again";
    msg.style.backgroundColor="#081b31";
};
const showWinner = (userwin, userchoice, Compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${Compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        compscorepara.innerText=computerscore;
        msg.innerText=`you lose! comp ${Compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playegame = (userchoice) => {
    const Compchoice = gencompChoice();
     if(userchoice === Compchoice)
        drawgame();
    else{
        let userwin =true;
        if(userchoice === "rock"){
            userwin=Compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
           userwin = Compchoice === "scissor" ? false : true;
      }else {
        Compchoice === "rock" ? false : true;
      }
      showWinner(userwin , userchoice , Compchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playegame(userchoice);
    });    
});
