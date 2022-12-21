const fs = require('fs');

const filePath = './teste.txt';

// définie les données à écrire dans le fichier
const data = 'Ceci est un exemple de données à écrire dans un fichier';

// la méthode fs.writeFile() pour écrire les données dans le fichier
fs.writeFile(filePath, data, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Fichier créé et données écrites avec succès !');
  }
});