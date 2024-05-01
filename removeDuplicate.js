function removeDups(numbers) {
    let unique = [];
    for (let i = 0; i < numbers.length; i++) {
        if (unique.indexOf(numbers[i]) === -1) {
            unique.push(numbers[i]);
        }
    }
    return unique;
}

const numbers = [1, 5, 5, 6, 7];
console.log(removeDups(numbers));
