const path = require('node:path');

// renvoie nom de fichier à partir d'un chemin complet
const fileName = path.basename('/Users/adamhocini/Documents/Isitech/D2/Module/Module NodeJS/NodeJS/TP2/ex01.js');
console.log(fileName); 

// renvoie l'extension d'un fichier à partir d'un chemin complet
const fileExtension = path.extname('/Users/adamhocini/Documents/Isitech/D2/Module/Module NodeJS/NodeJS/TP2/ex08.js');
console.log(fileExtension); 

// renvoie nom de répertoire à partir d'un chemin complet
const dirName = path.dirname('ex08.js');
console.log(dirName); 

// renvoie un chemin complet à partir de plusieurs segments de chemin
const fullPath = path.join('/Users/adamhocini', 'Documents', 'test.txt');
console.log(fullPath); 
