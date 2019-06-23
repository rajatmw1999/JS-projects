var level = 0;

$(document).keypress(function(){
if(level === 0)
  nextSequence();
});

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
  userClickedPattern = [];
  ++level;
  $("#level-title").html("Level " + level);
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber*3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(randomNumber);

var clickedButton = "#" + randomChosenColor;
console.log(clickedButton);
$(clickedButton).fadeOut(100).fadeIn(100);

var sound = new Audio("sounds/" + randomChosenColor +  ".mp3");
sound.play();
}

$(".btn").click(function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(this.id);
  animatePress(this.id);
  checkAnswer(userClickedPattern.length - 1);
})


function playSound(name){
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);
}

var allok = 0;

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
  }



function startOver() {
  level = 0;
  gamePattern = [];

}
