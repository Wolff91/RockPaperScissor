let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

//randomly generates computer entry
function getComputerChoice() {
    let computerPick = ['rock', 'paper', 'scissor']
    return computerPick[Math.floor(Math.random() * computerPick.length)] 
}

//plays a round of the game

function playRound(playerSelection) {
    let computerPlay = getComputerChoice()
    let result = ""

//defining the rules of the game

     if ((playerSelection == 'rock' && computerPlay == 'scissor') ||
         (playerSelection == 'paper' && computerPlay == 'rock') ||
         (playerSelection == 'scissor' && computerPlay == 'paper')) {

         playerScore +=1
         result = ('You win! ' + playerSelection + ' beats ' + computerPlay +
                '<br>Player score: ' + playerScore + '<br>Computer score: ' + 
                computerScore)

            if (playerScore == 5) {
                result += '<br>You won the game! Reload to page to play again'
            }
    }
        else if (playerSelection == computerPlay) {
            result = ('It\'s a tie! you both choose ' + playerSelection + 
                 ' no one get\'s a point' + '<br>player score: ' + playerScore +
                 '<br>computer score: ' + computerScore) 
        }

        else {
            computerScore +=1
            result = ('You loose! ' + computerPlay + ' beats ' +
                     playerSelection + '<br>Player score: ' + playerScore + 
                     '<br>Computer score: ' + computerScore)

            if (computerScore == 5) {
                result += '<br>You lost the game! Reload to page to play again'
            }
            
        }

   document.getElementById('result').innerHTML = result
   return
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})