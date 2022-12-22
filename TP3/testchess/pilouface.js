const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);


let message = "Tapez `p` pour pile ou `f` pour face, puis appuyez sur Entrée.\n";
rl.question(message, (answer) => {
        pilouface(answer);
        rl.close();
}); 

let pilouface = (userChoice) => {
  
  let outcome = "f";
  if (Math.random() > 0.5) {
    outcome = "p";
        }
    if (outcome == userChoice) {
      console.log("Vous avez gagné! :)");
    } else {
      console.log("vous avez perdu... :(");
    }

}



console.log(userChoice);