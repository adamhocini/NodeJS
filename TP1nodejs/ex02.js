const array = [1,2,3,4,5,69]

function getMaxNumber(array) {
    const max = Math.max(...array);
    console.log(max);
}

getMaxNumber(array)
