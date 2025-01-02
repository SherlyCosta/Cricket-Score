let totalScore = 0;

function addRun(player, run) {
  const scoreInput = document.getElementById(`score${player}`);
  const currentScore = parseInt(scoreInput.value, 10);
  scoreInput.value = currentScore + run;

  updateTotal();
  updateRunRate();
}

function updateTotal() {
  const scores = [1, 2, 11].map(player => parseInt(document.getElementById(`score${player}`).value, 10));
  totalScore = scores.reduce((a, b) => a + b, 0);
  document.getElementById('total').value = totalScore;
}

function addBall() {
  const oversInput = document.getElementById('overs');
  let [overs, balls] = oversInput.value.split('.').map(Number);

  if (balls < 5) {
    balls += 1;
  } else {
    overs += 1;
    balls = 0;
  }

  oversInput.value = `${overs}.${balls}`;
  updateRunRate();
}

function updateRunRate() {
  const oversInput = document.getElementById('overs').value;
  const [overs, balls] = oversInput.split('.').map(Number);
  const totalOvers = overs + balls / 6;

  const runRate = totalOvers > 0 ? (totalScore / totalOvers).toFixed(2) : '0.00';
  document.getElementById('runRate').value = runRate;
}
