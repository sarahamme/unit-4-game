jQuery(document).ready(function($){

// Select random number between 1 and 100;
var wins = 0;
var loses = 0;
var computerGenerateNumber = Math.floor(Math.random() * 102) + 19;
console.log(computerGenerateNumber);
$("#randomnumber").html(computerGenerateNumber);

// assign crystals random numbers betwem 1-100;
// document.getElementById("row") = Math.floor(Math.random() * 20);

var num = 0; //your number
var crystalOneValue = 1 + Math.floor(Math.random() * 15);
$( "#crystal-one" ).on( "click", function() {
    num += crystalOneValue;
    // console random number
    console.log(num);
    $("#yournumber").text(num);
    checkScore();
    return;   
    // display randon number on screen for 1 second;
  });

var crystalTwoValue = 1 + Math.floor(Math.random() * 15);
$( "#crystal-two" ).on( "click", function() {
    num += crystalTwoValue;
    // console random number
    console.log(num);
    $("#yournumber").text(num);
    checkScore();
    return;   
    // display randon number on screen for 1 second;
  });

var crystalThreeValue = 1 + Math.floor(Math.random() * 15);
$( "#crystal-three" ).on( "click", function() {
    num += crystalThreeValue;
    // console random number
    console.log(num);
    $("#yournumber").text(num);
    checkScore();
    return;   
    // display randon number on screen for 1 second;
  });

var crystalFourValue = 1 + Math.floor(Math.random() * 15);
$( "#crystal-four" ).on( "click", function() {
    num += crystalFourValue;
    // console random number
    console.log(num);
    $("#yournumber").text(num);
    checkScore();
    return;   
    // display randon number on screen for 1 second;
  });

function checkScore() {
  if (num === computerGenerateNumber) {
    $("#win-or-lose").append("You Win!");
    wins++;
    $("#win").text(wins);
    num = 0;
  } else if ( num > computerGenerateNumber) {
    $("#win-or-lose").append("You Lost!");
    loses++;
    $("#loses").text(loses);
  };
};

$("#button").on("click", function () {
  num = 0;
  computerGenerateNumber = Math.floor(Math.random() * 102) + 19;
  crystalOneValue = 1 + Math.floor(Math.random() * 15);
  crystalTwoValue = 1 + Math.floor(Math.random() * 15);
  crystalThreeValue = 1 + Math.floor(Math.random() * 15);
  crystalFourValue = 1 + Math.floor(Math.random() * 15);
  $("#randomnumber").text(computerGenerateNumber);
  $("#yournumber").text(num);

});


});