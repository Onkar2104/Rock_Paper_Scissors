let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=(userChoice,compChoice)=>{
    // alert("Game was draw");
    // console.log("Game was draw");
    msg.innerText=`Game was Draw. Play again.! ${userChoice
    }=${compChoice}`;
    msg.style.backgroundColor="#081d31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // alert("You Win");
        msg.innerText=`You win.! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // alert("You Loose");
        msg.innerText=`You Loose.! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("useer choice= ",userChoice)
    const compChoice=genCompChoice();
    // console.log("Comp choice= ",compChoice);

    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false : true;
        }else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);m
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});