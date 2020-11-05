"use strict";
var guess = Math.floor(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;
$(document).ready(function () {
  $("#check").click(function () {
    var a = Number($("#number").val());
    if (a == guess) {
      $("#guess").text("Correct Number Yuppy");
      $("#win").text("You Won");
      $("body").css({ "background-color": "rgb(96, 185, 88)" });
      $("#score").text(score);
      if (highscore < score) {
        highscore = score;
        $("#highscore").text(highscore);
      }
    } else if (!a) {
      $("#guess").text("no number");
    } else if (a < 1 || a > 20) {
      $("#guess").text("Not included");
    } else if (a < guess) {
      $("#guess").text("Keep guessing very low");
      score--;
      $("#score").text(score);
      if (score <= 0) {
        $("#guess").text("You lost");
      }
    } else if (a > guess) {
      $("#guess").text("Keep guessing very high");
      score--;
      $("#score").text(score);
      if (score <= 0) {
        $("#guess").text("You lost");
      }
    }
    //console.log(guess);
  });

  $("#again").click(function () {
    $("#guess").text("Start Guessing ....!");
    $("#win").text("GUESS MY NUMBER");
    score = 20;
    $("#score").text(score);
    guess = Math.floor(Math.random() * 20) + 1;
    $("body").css({ "background-color": " rgba(29, 27, 27, 0.849)" });
    $("#number").val("");
    //console.log("new number  = " + guess);
  });
});
