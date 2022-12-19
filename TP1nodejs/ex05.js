function numberToWords(num) {
    let units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    let tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    if (num < 20) {
        return units[num]; 
    }
    else if (num < 100) {
        return tens[Math.floor(num / 10)] + ((num % 10 != 0) ? "-" + units[num % 10] : "");
    }
    else if (num > 100 && num < 120){
        return "cent " + units[num - 100];
    }
    else if (num > 120 && num < 200){
        return "cent " + tens[Math.floor(num / 10)] + ((num % 10 != 0) ? "-" + units[num % 10] - 100 : "");
    }
}

console.log(numberToWords(130))