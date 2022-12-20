function sortNumbersInDescendingOrder(numbers) {
    return numbers.sort((a, b) => b - a);
}

const numbers = [10, 5, 7, 22, 2];
const sortedNumbers = sortNumbersInDescendingOrder(numbers);
console.log(sortedNumbers); // affiche [22, 10, 7, 5, 2]