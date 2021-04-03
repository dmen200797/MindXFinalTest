let button = document.getElementById('button');
let ans = Math.floor(Math.random() * 10) + 1;
let count = 0;
button.onclick = function () {
    let inputNum = document.getElementById('input-number').value;
    count++;
    if (inputNum == ans) {
        alert('Bingo: ' + ans);
        if (count >= 3) {
            button.disabled = true;
        }
    } else {
        alert('Wrong number');
        if (count >= 3) {
            button.disabled = true;
            alert('out of guess, answer is: ' + ans)
        }
    }
}
