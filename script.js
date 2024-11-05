document.addEventListener("DOMContentLoaded", () => {
    const choiceBtns = document.querySelectorAll(".choice-btn"); 
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultMessages = document.getElementById("result-message");
    const userScoreDisplay = document.getElementById("user-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    const restartBtn = document.getElementById("restart-btn");
    let userScore = 0;
    let computerScore = 0;

    choiceBtns.forEach(choice => {
        choice.addEventListener('click', () => {
            let userChoice = choice.textContent.trim().toLowerCase(); 
            userChoiceDisplay.textContent = "Your Choice: " + capitalizeFirstLetter(userChoice); 

            let computerChoice = getComputerChoice();
            computerChoiceDisplay.textContent = "Computer's Choice: " + capitalizeFirstLetter(computerChoice); 

            let result = getWinner(userChoice, computerChoice);
            updateScore(result);
            displayResult(result);
        });
    });

    restartBtn.addEventListener('click', () => {
        window.location.reload();
    });

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function getWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "tie";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return "user";
        } else {
            return "computer";
        }
    }

    function updateScore(result) {
        if (result === "user") {
            userScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        userScoreDisplay.textContent = `Your Score: ${userScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    function displayResult(result) {
        switch (result) {
            case "tie":
                resultMessages.textContent = "It's a tie!";
                break;
            case "user":
                resultMessages.textContent = "You win!";
                break;
            case "computer":
                resultMessages.textContent = "Computer wins!";
                break;
        }
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});
