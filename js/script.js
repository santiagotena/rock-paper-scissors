//Computer's selection
function computerPlay() {
    const options = ["rock", "paper","scissors"];
    const selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}

//Play single round and declare a winner
function playRound(playerSelection, computerSelection){
    //Variable standarization
    playerSelection = playerSelection.toLowerCase();
    //Set initial variables
    let outcome = "";
    let playersDraw = false;
    let playerWins = true;
    let message = "";
    let message1 = "";
    let message2 = "";

    //Draw condition
    if (playerSelection === computerSelection){
        playersDraw = true;
        message = "It is a Draw.";
        return outcome = [message, playersDraw, playerWins];
    }

    //Player loses conditions
    if (playerSelection === "rock" && computerSelection === "paper"){
        playerWins = false;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        playerWins = false;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        playerWins = false;
    }

    //Message of winner
    if (playerWins){
        message1 = "You win! ";
    } else {
        message1 = "You lose! ";
    }

    //Message for winning conditions
    if ((playerSelection === "rock" || computerSelection === "rock") 
            && (playerSelection === "scissors" || computerSelection === "scissors")){
        message2 = "Rock beats scissors.";
    } else if ((playerSelection === "paper" || computerSelection === "paper") 
            && (playerSelection === "rock" || computerSelection === "rock")){
        message2 = "Paper beats rock.";
    } else if ((playerSelection === "scissors" || computerSelection === "scissors") 
            && (playerSelection === "paper" || computerSelection === "paper")){
        message2 = "Scissors beats paper.";
    }

    message = message1 + message2;
    return [message, playersDraw, playerWins];
}

//Event listener
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
});

//Create a best out of 5 set of rounds
function game(){
    //Set starting scores
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++){
        //Player and computer selection
        playerSelection = window.prompt("Select your weapon.", "Rock, paper or scissors");
        let computerSelection = computerPlay();
        //Play a round of the game
        let round = playRound(playerSelection, computerSelection);
        //Distribute the outcome information
        let message = round[0];
        let playersDraw = round[1];
        let playerWins = round[2];
        //Announce the round outcome
        console.log(message);

        //Draw condition is met
        if (playersDraw){
            i--
        }
        //Increase the score
        if (playersDraw === false){
            if (playerWins){
                scorePlayer++;
            } else {
                scoreComputer++;
            }
        }
        //When score reaches 3 declare overall winner
        if (scorePlayer === 3){
            return "Player wins!";
        } else if (scoreComputer === 3){
            return "Computer wins!";
        }
    }
}