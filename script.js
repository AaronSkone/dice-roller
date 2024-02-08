document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('rollButton').focus();
});

function rollDice() {
    var diceResult = Math.floor(Math.random() * 6) + 1; // Simulate rolling a 6-sided dice
    document.getElementById('diceResult').value = diceResult;
}
