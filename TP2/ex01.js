const fs = require ('fs')

// utiliser la méthode fs.readFile() pour lire le fichier.
fs.readFile('test.txt','utf-8',(err,data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

