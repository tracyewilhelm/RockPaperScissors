var win = 0
var loss = 0
var ties = 0
var answers = ["rock", "paper", "scissors",] //this is the list of variables that the user and computer can choose from

 var play 
setTimeout(function() {
  alert("Welcome to the game Rock, Paper, Scissors!") 
   play = window.confirm("Do you want to play?")
  console.log(play)

  gameplay()

}, 2000);
//welcome window - alerts the user 'welcome...' - this works



//ok/cancel window to ask if user wants to play - this works


  
// if they chose ok (truthy) run code; if they chose cancel window says 'have a nice day' - THIS BAD
// how do I get it to go back to play function when they close the 'nice day' window?

var gameplay = function () {
  if (play == false) {
    console.log(gameplay)
    window.alert("Have a nice day!")
  } else {
    

    Choice = window.prompt("rock, paper, or scissors?"); //prompt asking user to pick r, p, s
    if (answers.includes(Choice)) {
         alert("Good choice!")   
    } else {
      alert("You can't play Rock, Paper, Scissors with " + Choice + "!") //if the user doesn't pick r, p, s window says 'you can't win with ___'

      console.log(Choice) //logs the users choice in the console
    }
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)]; //variable that is a function where the computer picks a random answer from the var answer array
    alert("Computer chooses " + randomAnswer) //window telling the user which answer variable was picked at random
  
    var outcomes = function () {
  
      if (Choice == randomAnswer) {
        console.log("you tied!")
        alert("You tied!")
        ties++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice == "rock" && randomAnswer == "scissors") {
        console.log("You win!")
        alert("You win!")
        win++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice == "rock" && randomAnswer == "paper") {
        console.log("You lose")
        alert("You lose")
        loss++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice == "paper" && randomAnswer == "rock") {
        console.log("You win!")
        alert("You win!")
        win++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice == "paper" && randomAnswer == "scissors") {
        console.log("You lose")
        alert("You lose")
        loss++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice == "scissors" && randomAnswer == "paper") {
        console.log("You win!")
        alert("You win!")
        win++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice == "scissors" && randomAnswer == "rock") {
        console.log("You lose")
        alert("You lose")
        loss++
        alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
        return

      } else if (Choice != answers) {
        console.log("You lose")
        alert("You lose")
      }
      
    }
    console.log(outcomes())
    var playagain = confirm("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties + "\nPlay again?") 
    if (playagain == true) {
      gameplay()
    } else {
      alert("Thanks for playing")
   }
  } 
  return
}
  
  // console.log(gameplay())






  

 

