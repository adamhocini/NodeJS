const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
//readline fournit une interface pour lire les données d'un flux lisible

let pilouface = (userChoice) => {
  
  let outcome = "f";
  // La fonction Math.random() renvoie un nombre pseudo-aléatoire à virgule flottante supérieur ou égal à 0 et inférieur à 1
  if (Math.random() > 0.5) {
    outcome = "p";
        }
    if (outcome == userChoice) {
      console.log("Vous avez gagné! : ``)");
      console.log(`
      ░░░░░░░░░░░░░░░░░░░░░░█████████
      ░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███
      ░░█▒▒▒▒▒▒█░░░░░░░███▒▒▒▒▒▒▒▒▒▒▒▒▒███
      ░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
      ░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███
      ░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██
      ░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
      ░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██
      ░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██
      ██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██
      █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██
      ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
      ░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
      ░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
      ░░████████████░░░█████████████████
      `);
    } else {
      console.log("vous avez perdu... :(");
      console.log(`
      ✭┈┈┈┈N┈O┈O┈B┈S┈┈┈✭
      `)
    }

}
let message = "Tapez `p` pour pile ou `f` pour face, puis appuyez sur Entrée.\n";
rl.question(message, (answer) => {
        pilouface(answer);
        rl.close();
        //La méthode rl.close() ferme l'instance d'InterfaceConstructor et abandonne le contrôle des flux d'entrée et de sortie.
});



