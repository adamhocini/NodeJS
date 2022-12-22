import chalk from 'chalk';
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let coinToss = (userChoice) => {
  
    let outcome = "t";
    if (Math.random() > 0.5) {
      outcome = "h";
    }
    if (outcome == userChoice) {
      console.log("You won the toss! :)");
    } else {
      console.log("You lost the toss :(");
    }
}
