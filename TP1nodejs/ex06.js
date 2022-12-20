function getPropertyValues(objects, propertyName) {
    return objects.map(function(object) {
      return object[propertyName];
    });
    // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
}

const objects = [
    { name: 'Adam', age: 22 },
    { name: 'Bob', age: 40 },
    { name: 'Karime', age: 35 }
  ];
  
  console.log(getPropertyValues(objects, 'name')); // ['Adam', 'Bob', 'Karime']
  console.log(getPropertyValues(objects, 'age')); // [30, 40, 35]