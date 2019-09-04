//  cash the DOM = storing info for future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p =  document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// put choices in an array, Math object generates random choice from array, * 3 (never goes over 3) Math.floor gives whole number
function getComputerChoice() {
  const choices = ['r', 'p', 's']; 
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
   
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
   return "Scissors";
}
function win(userChoice, computerChoice) { 
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.inerHTML = computerScore;
  // es6 elements: template strings with 'back ticks `` (gets rid of + and "")
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}, You Win!`;

  
  // classList gives you an array of all the classes on that specific element
}
function lose(userChoice, computerChoice) { 
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub(); 
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // es6 elements: template strings with 'back ticks `` (gets rid of + and "")
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}, You Lost!`;

  
  // set time-out function, takes 2 arguments
} 

function tie(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  // es6 elements: template strings with 'back ticks `` (gets rid of + and "")
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}, Tie Game!`;

  
} 

  
// define game function, takes user imput
function game(userChoice) {
  const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break; 
      case "rp":
      case "ps":
      case "sr":
    lose(userChoice, computerChoice);
      break;
        case "rr":
        case "pp":
        case "ss":
      tie(userChoice, computerChoice);
      break;
    
   }
  }

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p"); 

  })

  scissors_div.addEventListener('click', function() {
    game("s"); 
    
})
}

main();
 