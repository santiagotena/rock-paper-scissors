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
    let message1 = "";
    let message2 = "";

    //Draw condition
    if (playerSelection === computerSelection){
        playersDraw = true;
        return outcome = ["It is a Draw.", playersDraw, playerWins];
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
    if (playerWins === true){
        message1 = "You win! ";
    } else {
        message1 = "You lose! ";
    }

    //Message for winning conditions
    if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors")){
        message2 = "Rock beats scissors.";
    } else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "rock" || computerSelection === "rock")){
        message2 = "Paper beats rock.";
    } else /*if ((playerSelection === "scissors" || computerSelection === "scissors") && (playerSelection === "paper" || computerSelection === "paper"))*/{
        message2 = "Scissors beats paper.";
    }

    const message = message1 + message2;
    return [message, playersDraw, playerWins];
}

//Create a best out of 5 set of rounds
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt("Select your weapon.", "Rock, paper or scissors");
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        //Distriubute the round information
        let message = round[0];
        let playersDraw = round[1];
        let playerWins = round[2];
        //Announce the winner
        console.log(message);
        //Increase the score
        if (playersDraw === false){
            if (playerWins){
                scorePlayer++;
            } else {
                scoreComputer++;
            }
        }
    }
    //Final veredict
    if (scorePlayer > scoreComputer){
        return "Player wins!";
    } else if (scorePlayer < scoreComputer){
        return "Computer wins!";
    } else {
        return "This is a draw.";
    }
}