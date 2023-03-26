const rockbtn = document.getElementById('RockButton');
const paperbtn = document.getElementById('PaperButton');
const scissorsbtn = document.getElementById('ScissorsButton');
var playerSelection;
var computerResult = document.getElementById("Computer Result");
var computerSelection = getComputerChoice();
var roundResult = document.getElementById("GameResult");
var round = 1;
var playerScore = 0;
var computerScore = 0;

rockbtn.addEventListener('click',function handleClick()
{
    playerSelection = "rock";
    playRound(playerSelection);
})

paperbtn.addEventListener('click',function handleClick()
{
    playerSelection = "paper";
    playRound(playerSelection);
})

scissorsbtn.addEventListener('click',function handleClick()
{
    playerSelection = "scissors";
    playRound(playerSelection);
})

function playRound(playerSelection)
{
    computerSelection = getComputerChoice();
    computerResult.innerHTML = computerSelection;

    if (playerSelection == computerSelection)
    {
        roundResult.innerHTML = "It's a tie!"
    }
    
    if(playerSelection == "rock")
    {
        if(computerSelection =="paper")
        {
            roundResult.innerHTML = "Computer Wins.";
            computerScore++;
        }
        else if(computerSelection == "scissors")
        {
            roundResult.innerHTML = "You win!";
            playerScore++;
        }
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {
            roundResult.innerHTML = "Computer Wins.";
            computerScore++;
        }
        else if(computerSelection == "rock")
        {
            roundResult.innerHTML = "You win!";
            playerScore++;
        }
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
        {
            roundResult.innerHTML = "Computer Wins.";
            computerScore++;
        }
        else if(computerSelection == "paper")
        {
            roundResult.innerHTML = "You win!";
            playerScore++;
        }
    }
    round++;
    if(round>=6)
    {
        var gameResult = "null";
        if(playerScore>computerScore)
        {
            gameResult = "You win!";
        }
        else if(computerScore>playerScore)
        {
            gameResult = "Computer wins."
        }
        else if(computerScore == playerScore)
        {
            gameResult = "Tie.";
        }
        alert(gameResult);
        round = 1;
    }
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
