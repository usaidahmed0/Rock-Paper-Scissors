let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



const genCompChoice = () => {
    const options = ["rock","Paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
}


const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        // console.log("you Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        userscore++;
        compScorePara.innerText = compscore;
        // console.log("you lose.");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const drawGame = ()=>{
    // console.log("game was draw.");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors"? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "rock"? false : true;
  
      }
      showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});