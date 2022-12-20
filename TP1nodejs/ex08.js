function capitalizeVowels(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
    newStr += str[i].toUpperCase();
    }
    // si string = a une voyelle '||' = ou logique '===' = scrtictement egale à.
    else {
    newStr += str[i];
    }
    }
    return newStr;
}
    
console.log(capitalizeVowels("hello world")); // hEllO wOrld
console.log(capitalizeVowels("javascript")); // jAvAscrIpt
console.log(capitalizeVowels("adamhocini")); // AdAmhOcInI