//array that matches name of letter
var boxArray = ["a", "b", "c", "d", "e"];

//function that randomly choses the letter to have an X
function placeX(boxArray) {
  return boxArray[Math.floor((5 * Math.random()))];
}


//for statement listens for which button the user picks
for (var i = 0; i < 5; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click",
    function() {

      var buttonInnerHTML = this.innerHTML;
      luckyClick(buttonInnerHTML);
    });
}

//function that decides if the clicked button matches the X or matches the star
function luckyClick(buttonInnerHTML) {

  if (placeX(boxArray) == buttonInnerHTML) {
    var clickedButton = document.getElementById(buttonInnerHTML);
    clickedButton.classList.add("x");
//removes X and resets the score to zero
    setTimeout(function() {
      clickedButton.classList.remove("x");
      restartGame();
    }, 500);

  } else {
    var clickedButton = document.getElementById(buttonInnerHTML);
    clickedButton.classList.add("star");
    addPoint();
    //removes star
    setTimeout(function() {
      clickedButton.classList.remove("star");
    }, 500);

  }
}

//restarts the game and resets the counter to zero back
function restartGame() {
  location.reload();
}


//adds a point to the score
function addPoint() {
  var currentScore = document.getElementById("scorecard");
  currentScore.innerHTML++;
}
