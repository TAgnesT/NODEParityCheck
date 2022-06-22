let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let parities = [];

function parityCheck(number){
    if (number % 2 === 0){
        parities.push(number);
        return;
    }
    if (number <= 1 || number % 1 === 0) {
        return;
    }

    parities.push(number);
}

numbers.forEach(number => {
    parityCheck(number);
});
console.log(parities);
