const min = arr => arr.reduce((x, y) => Math.min(x, y));
const max = arr => arr.reduce((x, y) => Math.max(x, y));
 
const arr = [ 6, 3, 5, 2, 9 ];
 
console.log("Min:", min(arr));
console.log("Max:", max(arr));