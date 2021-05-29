function calculerMise() {
    let bankroll = document.getElementById('bankroll').value;
    let cote = document.getElementById('cote').value;
    let result = (bankroll * 0.1) * (0.3 / (cote - 1));
    document.getElementById('result').value = Math.round((result + Number.EPSILON) * 100) / 100;
}