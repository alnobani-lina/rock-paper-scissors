let userChoice = 1;
let computerChoice = 1;
let playerScore = 0;
let computerScore = 0;
let userSelection;
let computerSelection;
document.getElementById("btn1").style.backgroundColor  = "green";
function btn1() {

  document.getElementById("rock-img").src = "./img/rock1.png";

}

function btn2() {
    document.getElementById("rock-img").src = "./img/paper1.png";

}

function btn3() {
    document.getElementById("rock-img").src = "./img/scissors1.png";

}
//let i = 1;

function userAnim(){
    plaAnimation(true,1);
    
   // i =1;
}

  let computerImg = document.getElementById("computer-img");
  let userImg = document.getElementById("rock-img");
  //console.log(computerImg);

  function computerPlay() {
    
    plaAnimation(false,1);
       // i =1;
}

function plaAnimation(isUser, i)
{
    chooseAnimation(isUser);
    setTimeout(function() {
        i++;        
        if (i < 10) {     
            plaAnimation(isUser,i);   
        } 
        else{
            if (isUser)
            {
                if(userChoice == 1){
                document.getElementById("rock-img").src = "./img/rock1.png";
                userSelection = "rock";
                } else if(userChoice == 2) {
                document.getElementById("rock-img").src = "./img/paper1.png";
                userSelection = "paper";
                }else {
                document.getElementById("rock-img").src = "./img/scissors1.png";
                userSelection = "scissors";
                }
            }
            else
            {
                playRound();
                let computerChose = document.getElementById("computer-chose");
                computerChose.innerHTML = `computer chose: ${computerSelection}`;
                if(playerScore == 5){
                   
                    let score1 = document.getElementById("player-score");
                    score1.innerHTML = `${playerScore}`;
                    
                    document.getElementById("msg").innerHTML = "You Win!!";
                    playerScore = 0;
                    computerScore = 0;
                } else if(computerScore == 5){
                    let score2 = document.getElementById("computer-score");
                    score2.innerHTML = `${computerScore}`;
                    document.getElementById("msg").innerHTML = "You Loose!!";
                    playerScore = 0;
                    computerScore = 0;
                }
            }
            
            let userChose = document.getElementById("user-chose");
            userChose.innerHTML = `user chose: ${userSelection}`;
            let score1 = document.getElementById("player-score");
            score1.innerHTML = `${playerScore}`;
            let score2 = document.getElementById("computer-score");
            score2.innerHTML = `${computerScore}`;

        }               
      }, 200)
}

function chooseAnimation(isUser){

    if (isUser == true)
    {
        let random = Math.random();

        if (random <= 0.3333) {
            userImg.src = "./img/paper1.png";
        } else if (random >= 0.6666) {
            userImg.src = "./img/rock1.png";
        } else {
            userImg.src = "./img/scissors1.png";
        }
    }
    else
    {
        let random = Math.random();

        if (random <= 0.3333) {
            computerImg.src = "./img/paper2.png";
            computerChoice = 2;
        } else if (random >= 0.6666) {
            computerImg.src = "./img/rock2.png";
            computerChoice = 1;
        } else {
            computerImg.src = "./img/scissors2.png";
            computerChoice = 3;
        }
    }
}

let clickMe = document.getElementById("click");
clickMe.addEventListener("click", userAnim);
clickMe.addEventListener("click", computerPlay);
//clickMe.addEventListener("click", playRound);


function btnColor1() {

     document.getElementById("btn1").style.backgroundColor  = "green";
     document.getElementById("btn2").style.backgroundColor  = "black";
     document.getElementById("btn3").style.backgroundColor  = "black";
    userChoice = 1;
 
}

function btnColor2() {
    document.getElementById("btn2").style.backgroundColor  = "green";
    document.getElementById("btn1").style.backgroundColor  = "black";
    document.getElementById("btn3").style.backgroundColor  = "black";
    userChoice = 2;
}

function btnColor3() {
    document.getElementById("btn3").style.backgroundColor  = "green";
    document.getElementById("btn2").style.backgroundColor  = "black";
    document.getElementById("btn1").style.backgroundColor  = "black";
    userChoice = 3;
}




function playRound(){
    //console.log(playerSelection + " " + computerSelection);
    if (userChoice == 1)
        playerSelection = "rock";
    else if (userChoice == 2)
        playerSelection = "paper";
    else
        playerSelection = "scissors"

        if (computerChoice == 1)
            computerSelection = "rock";
        else if (computerChoice == 2)
            computerSelection = "paper";
        else
            computerSelection = "scissors"

             console.log(computerChoice + computerSelection + userChoice + playerSelection);
    if(playerSelection === "rock" && computerSelection === "rock"){
    console.log("It`s a tie!");
    } else if(playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("It`s a tie!");
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("It`s a tie!");
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win!");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win!");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win!");
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose!");
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "sicssors"){
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }

}