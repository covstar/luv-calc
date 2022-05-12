function lovescore(){

  // Name input
var name = document.getElementById('yourName').value;
var na = name.slice(0,1);
var cap = na.toUpperCase();
var me = (name.slice(1,20)).toLowerCase();
var capName = cap + me;
if (name == "") {
  return false;
}

// Theirs Name Input
var theirs = document.getElementById('theirName').value;
var the = theirs.slice(0,1);
var capi = the.toUpperCase();
var irs = (theirs.slice(1,20)).toLowerCase();
var capTheirs = capi + irs;
if (theirs == "") {
  return false;
}

// Generating random numbers
var n = Math.random();
var score = Math.floor(n * 100) + 1;

// Declaring result upon click
document.getElementById('score').innerHTML = ("Your ❤️ score is "
 + score + "%");

 if (score > 70) {
   document.getElementById('message').innerHTML = capName + " and " + capTheirs + " are meant for each other!😍";
   document.getElementById('message').style.color = "green";
 }
 if (score < 30) {
   document.getElementById('message').innerHTML = capName + " and " + capTheirs + " are like oil and water!😢";
   document.getElementById('message').style.color = "red";
 }
 if (score > 30 && score <= 70) {
   document.getElementById('message').innerHTML = "Dear "+ capName + " and " + capTheirs + " something good can still come out of your love lives, Just Believe!🥰";
   document.getElementById('message').style.color = "yellow";
 }
  else {
   return false;
 }
}