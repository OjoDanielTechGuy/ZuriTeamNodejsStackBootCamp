/**
Using Math.round() will give you a non-uniform distribution!
 */
const username = prompt("Enter your username: ");
const rangeofNumbers = 0;

function guessingGame(range) {
  
  rangeOfNumbers = Math.floor(Math.random() * range) + 1;
  
  const predict = prompt(`Predict the number between the range of 1 and ${range}`);
var numPredict = Number(predict); //coverting input to Integer

let point = 0; //initializing point to be awarded to player

  if(numPredict == rangeOfNumbers) {
    point += 1;
    alert(`You scored ${point} point`);
    console.log("Random Number = " + rangeOfNumbers);
    guessingGame(range + 1); //increasing range limit by 1
  }
  else {
    point = 0;
    alert("Not matched");
    console.log("Random Number = " + rangeOfNumbers);
  }
}

guessingGame(2);