function countVowels(str) {
    // On définit un compteur à 0
    let count = 0;
    
    // On définit un tableau contenant les voyelles
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // On parcourt chaque caractère de la chaîne
    for (let char of str) {
      // Si le caractère est une voyelle, on incrémente le compteur
      if (vowels.includes(char.toLowerCase())) {
        count++;
      }
    }
  
    // On renvoie le nombre de voyelles
    return count;
  }

  const numVowels = countVowels('Bonjour');
console.log(numVowels); // Affiche "3"
