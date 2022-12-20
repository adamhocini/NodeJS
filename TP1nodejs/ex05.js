function numberToWords(num) {
    let units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    let tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    if (num < 20) {
        return units[num]; 
        // num est le paramettre de la fonction
    }
    // si le chiffre est inferieur a 20
    else if (num < 100) {
        return tens[Math.floor(num / 10)] + ((num % 10 != 0) ? "-" + units[num % 10] : "");
        // Renvoie le plus grand nombre entier inférieur ou égal à son argument numérique.
    }
    // si le chiffre est supperieur ou egale a 20 et inferieure a 100

    else if (num > 100 && num < 120){
        return "cent " + units[num - 100];
    }
    // si le chiffre est supperieur ou egale a 100 et inferieure a 200
    else if (num > 120 && num < 200){
        return "cent " + tens[Math.floor(num / 10)] + ((num % 10 != 0) ? "-" + units[num % 10]: "");
    }
}

console.log(numberToWords(191))
