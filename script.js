const rockButton = document.getElementById('RockButton');
const paperButton = document.getElementById('PaperButton');
const scissorsButton = document.getElementById('ScissorsButton');
const roundText = document.getElementById('Round');
const computerResultImage = document.getElementById('ComputerAnswer');
const playerScoreText = document.getElementById('PlayerScore');
const computerScoreText = document.getElementById('ComputerScore');
var playerSelection;
var computerSelection = getComputerChoice();
var roundResult = document.getElementById("GameResult");
var round = 1;
var playerScore = 0;
var computerScore = 0;
let gameIsOver = false;

setInterval(function(){
    if(round>1)
    {
        playerScoreText.innerHTML = "Your score : " + playerScore;
        computerScoreText.innerHTML = "Computer's score: " + computerScore;    
        if(playerScore == 5 || computerScore == 5)
        {
            gameIsOver = true;
            if(playerScore > computerScore)
            {
                roundResult.innerHTML = "GAME OVER YOU WIN!";
            }
            else  if(computerScore > playerScore)
            {
                roundResult.innerHTML = "GAME OVER YOU LOSE!";
            }
        }
    }
})
        rockButton.addEventListener('click',function handleClick()
        {
            if(!gameIsOver)
            {
                playerSelection = "rock";
                playRound(playerSelection);
            }
        })
        
        paperButton.addEventListener('click',function handleClick()
        {
            if(!gameIsOver)
            {
                playerSelection = "paper";
                playRound(playerSelection);           
            }
        })
        
        scissorsButton.addEventListener('click',function handleClick()
        {
            if(!gameIsOver)
            {
                playerSelection = "scissors";
                playRound(playerSelection);
            }
        })
        
    


function playRound(playerSelection)
{
    computerSelection = getComputerChoice();
        if (playerSelection == computerSelection)
        {
            roundResult.innerHTML = "It's a tie!"
        }
        
        if(computerSelection == "rock")
        {
            computerResultImage.src = "Images/rock-computer.png";
            if(playerSelection =="scissors")
            {
                roundResult.innerHTML = "Rock beats scissors. Computer Wins.";
                computerScore++;
            }
            else if(playerSelection == "paper")
            {
                roundResult.innerHTML = "Paper beats rock. You win!";
                playerScore++;
            }
        }
        else if(computerSelection == "paper")
        {
            computerResultImage.src = "Images/paper-computer.png";
    
            if(playerSelection == "rock")
            {
                roundResult.innerHTML = "Paper beats rock. Computer Wins.";
                computerScore++;
            }
            else if(playerSelection == "scissors")
            {
                roundResult.innerHTML = "Scissors beat paper. You win!";
                playerScore++;
            }
        }
        else if(computerSelection == "scissors")
        {
            computerResultImage.src = "Images/scissors-computer.png";
    
            if(playerSelection == "paper")
            {
                roundResult.innerHTML = "Scissors beat paper. Computer Wins.";
                computerScore++;
            }
            else if(playerSelection == "rock")
            {
                roundResult.innerHTML = "Rock beats scissors. You win!";
                playerScore++;
            }
        }
        round++;
}


function getComputerChoice()
{
    let min = Math.ceil(1);
    let max = Math.floor(4);
    var result = Math.floor(Math.random()*(max-min) +min);
    switch(result)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "null";
    }
}
