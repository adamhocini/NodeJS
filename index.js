const min = arr => arr.reduce((x, y) => Math.min(x, y));
const max = arr => arr.reduce((x, y) => Math.max(x, y));
 
const arr = [ 6, 3, 5, 2, 9 ];
 
console.log("Min:", min(arr));
console.log("Max:", max(arr));


const fs = require('fs');
fs.readFile('textptxt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
}