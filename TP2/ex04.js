const fs = require('fs');

const directoryPath = '/Users/adamhocini/Documents/Isitech/D2/Module/Module NodeJS/NodeJS/TP2';

fs.readdir(directoryPath, function(err, files) {
  // Vérifie d'abord si une erreur s'est produite
  if (err) {
    console.error('Une erreur s\'est produite lors de la lecture du répertoire :', err);
    return;
  }

  // Affiche les noms de fichiers dans la console
  console.log('Voici les fichiers du répertoire :');
  console.log(files);
});
