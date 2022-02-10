//var user = "you"
//this is the variables that the 
var rps = ["rock", "paper", "scissors"]
var win = 0
var loss = 0
var ties = 0


//welcome window
alert("Welcome to the game!")


//prompt("Choose Rock, Paper, or Scissors")

var Choice = window.prompt("rock, paper, or scissors?");
console.log(Choice)

var answers = [
  "rock",
  "paper",
  "scissors",
]

var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

console.log(randomAnswer);

alert("Computer chose " + randomAnswer)

var outcomes = function () {
  
  if (Choice == randomAnswer) {
    console.log("you tied!")
    alert("You tied!")
    ties++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return

  } else if (Choice == "rock" && randomAnswer == "scissors") {
    alert("You win!")
    win++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return

  } else if (Choice == "rock" && randomAnswer == "paper") {
    alert("You lose")
    loss++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return

  } else if (Choice == "paper" && randomAnswer == "rock") {
    alert("You win!")
    win++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return

  } else if (Choice == "paper" && randomAnswer == "scissors") {
    alert("You lose")
    loss++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return

  } else if (Choice == "scissors" && randomAnswer == "paper") {
    alert("You win!")
    win++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return

  } else if (Choice == "scissors" && randomAnswer == "rock") {
    alert("You lose")
    loss++
    alert("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties)
    return
  }
}

console.log(outcomes())

confirm("Wins: " + win + "\nLosses: " + loss + "\nTies: " + ties + "\nPlay again?")  
