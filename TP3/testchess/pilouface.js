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
console.log(`




$$___$$_ $$$$$$$_ $$______ $$______ __$$$___ 
$$___$$_ $$______ $$______ $$______ _$$_$$__ 
$$$$$$$_ $$$$$___ $$______ $$______ $$___$$_ 
$$___$$_ $$______ $$______ $$______ $$___$$_ 
$$___$$_ $$______ $$____$_ $$____$_ _$$_$$__ 
$$___$$_ $$$$$$$_ $$$$$$$_ $$$$$$$_ __$$$___ 




`)
let message = "Tapez `p` pour pile ou `f` pour face, puis appuyez sur Entrée.\n";
rl.question(message, (answer) => {
        pilouface(answer);
        rl.close();
        //La méthode rl.close() ferme l'instance d'InterfaceConstructor et abandonne le contrôle des flux d'entrée et de sortie.
});

var prompt = require('prompt');

prompt.get(['choice'], function(err, result) {
    if (result.choice == "0") {
          console.log('voulez-vous recommencer?')
    }
});


let pilouface = (userChoice) => {
  
  let outcome = "f";
  // La fonction Math.random() renvoie un nombre pseudo-aléatoire à virgule flottante supérieur ou égal à 0 et inférieur à 1
  if (Math.random() > 0.5) {
    outcome = "p";
        }
    if (outcome == userChoice) {
      console.log("Vous avez gagné! : ``)"); 
    } else {
      console.log("vous avez perdu... :(");
      console.log(`
      ✭┈┈┈┈N┈O┈O┈B┈S┈┈┈✭
      `)
    }

}
         
// ajouter un choix 
// ajouter un compter de point 




















