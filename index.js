var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisp = document.querySelector("p span");

var p1Disp = document.querySelector("#p1Display");
var p2Disp = document.querySelector("#p2Display");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

var winningScore = 5;

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Disp.textContent = 0;
  p2Disp.textContent = 0;
  p1Disp.classList.remove("winner");
  p2Disp.classList.remove("winner");
}

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++
    if (p1Score === winningScore) {
      gameOver = true;
      p1Disp.classList.add("winner");
    }
    p1Disp.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++
    if (p2Score === winningScore) {
      gameOver = true;
      p2Disp.classList.add("winner");
    }
    p2Disp.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

numInput.addEventListener("change", function(){
 winningScoreDisp.textContent = numInput.value;
 winningScore = Number(numInput.value);
 reset();
});
