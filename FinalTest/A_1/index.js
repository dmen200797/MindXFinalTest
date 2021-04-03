let n = parseInt(prompt('Enter n'));
let inputNum = parseInt(prompt('Enter input number'));


function findOppositeNumber(intputN, inputNumber) {
    intputN.parseInt;
    inputNumber.parseInt;
    if (inputNumber >= (intputN / 2)) {
        return (inputNumber - (intputN / 2));
    } else {
        return (inputNumber + (intputN / 2));
    }
}
if (inputNum >= n) {
    alert('input must be < n');
} else if (4 <= n && n <= 20 && n % 2 == 0) {
    let result = findOppositeNumber(n, inputNum)
    console.log(result);
} else {
    alert('n is a odd number >= 4 and <= 20');
}



