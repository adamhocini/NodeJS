function remove(string) {
    let result = string.replaceAll("a", "");
    result = result.replaceAll("e", "");
    result = result.replaceAll("i", "");
    result = result.replaceAll("o", "");
    result = result.replaceAll("u", "");
    result = result.replaceAll("y", "");
    // retourne le résultat final
       return result;
    }
    
console.log(remove("antivoyelle"));