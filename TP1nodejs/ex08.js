function UpperCase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
    newStr += str[i].toUpperCase();
    }
    // Si string = a une voyelle '||' = ou logique '===' = scrtictement égale à.
    else {
    newStr += str[i];
    }
    }
    return newStr;
}
    
console.log(UpperCase("hello world")); // hEllO wOrld
console.log(UpperCase("javascript")); // jAvAscrIpt
console.log(UpperCase("adamhocini")); // AdAmhOcInI