let userChoice = 1;

function btn1() {
  // document.getElementById("rock-img").src = "./img/rock1.png";
  userChoice = 1;
}

function btn2() {
    //document.getElementById("rock-img").src = "./img/paper1.png";
    userChoice = 2;
}

function btn3() {
    //document.getElementById("rock-img").src = "./img/scissors1.png";
    userChoice = 3;
}



function userAnim(){
    plaAnimation(true);
    i =1;
}
  let myBtn2 = document.getElementById("btn2");
  let i = 1;

  let computerImg = document.getElementById("computer-img");
  let userImg = document.getElementById("rock-img");
  //console.log(computerImg);

  function computerPlay() {
    
    plaAnimation(false);
        i =1;
}

function plaAnimation(isUser)
{
    chooseAnimation(isUser);
    setTimeout(function() {
        i++;        
        if (i < 10) {     
            plaAnimation(isUser);   
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
        } else if (random >= 0.6666) {
            computerImg.src = "./img/rock2.png";
        } else {
            computerImg.src = "./img/scissors2.png";
        }
    }


}

let clickMe = document.getElementById("click");
clickMe.addEventListener("click", userAnim);
clickMe.addEventListener("click", computerPlay);
