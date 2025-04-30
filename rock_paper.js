 let userScore=0;
 let computerScore=0;

 let choices=document.querySelectorAll(".choice");
 let msg=document.querySelector("#msg");
 let userscorePara=document.querySelector("#user-score");
 let compterScorePara=document.querySelector("#comp-score");

 const genearteComputerChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    //rock,paper,scissor
    return options[randomIdx];
 };

 const DrawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Game Draw,Play again";
    msg.style.backgroundColor="#081b31";
 };

 const showWinner=(userWin,Userchoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        // console.log("You win!");
        msg.innerText=`You win! ${Userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compterScorePara.innerText=computerScore;
        // console.log("You lose!");
        msg.innerText=`You loose! ${computerChoice} beats ${Userchoice}`;
        msg.style.backgroundColor="red";
    }
 }

 const playGame=(Userchoice)=>{
    //Generate computer choice
    const computerChoice=genearteComputerChoice();

    //fight condition
    if(Userchoice === computerChoice){
        //draw game
        DrawGame();
    }
    else{
        let userWin=true;
        if(Userchoice === "Rock"){
            //scissor,paper
            userWin=computerChoice === "Paper"? false:true;
        }
        else if(Userchoice === "Paper"){
            //scissor,rock
            userWin = computerChoice === "Scissor"?false:true;
        }
        else{
            //paper,rock
            userWin=computerChoice ==="Rock" ? false : true;
        }
        showWinner(userWin,Userchoice,computerChoice);
    }
 };

 choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");
        playGame(Userchoice);
    });
 });

