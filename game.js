let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    return random;
};  

function getHumanChoice(){
    let hi = prompt("sup");
    let lowerCase = hi.toLowerCase();
    switch(lowerCase) {
        case "rock": return 0;
        case "paper": return 1;
        case "scissors": return 2;
        default: break;
      }
    return lowerCase;
}

function playRound(humanChoice, computerChoice) {
    console.log("human" + humanChoice);
    console.log("computer" + computerChoice);

    if(humanChoice == 1 && computerChoice == 0){
        console.log("human wins paper beats rock");
        humanScore++;
    } else if(humanChoice == 0 && computerChoice == 2){
        console.log("human wins rock beats scissors");
        humanScore++;
    }
     else if(humanChoice == 2 && computerChoice == 1){
        console.log("human wins scissors beats paper");
        humanScore++;
     } else if(humanChoice == 0 && computerChoice == 1){
        console.log("computer wins rock beats scissors")
        humanScore++;
    }
     else if(humanChoice == 2 && computerChoice == 0){
        console.log("computer wins scissors beats paper")
        computerScore++;
     }else if(humanChoice == 1 && computerChoice == 2){
        console.log("computer wins rock beats scissors")
        computerScore++;
    } else {
        console.log("it is a tie!")
    }
   
  }
  

  
  while(humanScore < 5 || computerScore < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  
  }
