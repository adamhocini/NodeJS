const fs = require('fs');

//utilise la méthode fs.readFile() pour lire le fichier.
fs.readFile('test.txt', function(err, data) {
    if (err) throw err;
    console.log(data);
});

//la méthode fs.writeFile() pour réécrie le fichier avec les données modifiées.
fs.readFile('test.txt', function(err, data) {
    if (err) throw err;

    //modifier le contenu du fichier
    //ma méthode replace de la chaîne de caractères pour remplacer une str par une autre.
    //le modificateur 'g' permet de remplacer tts les occurrences de la str 'ancien texte' par 'nouveau texte'.
    let modifiedContent = 'nouveau test'

    fs.writeFile('test.txt', modifiedContent, function(err) {
        if (err) throw err;
        console.log('Le fichier a été modifié et réécrit avec succès!');
    });
});