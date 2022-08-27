var counter = 0
const options = ["green", "yellow", "red", "blue"];
var checkList = [];
var userList = [];

function nextLevel(){
  var randomColor = options[Math.floor(Math.random()*options.length)];
  checkList.push(randomColor);
  $("h1").text("Level "+checkList.length)
  counter = 0
  $("#"+randomColor).fadeOut(200);
  $("#"+randomColor).fadeIn(200);
  var audio = new Audio('sounds/'+randomColor+'.mp3');
  audio.play();
}

$(document).keypress(function(event){
  console.log(counter)
  if ($("h1").text() == "Press A Key to Start" || $("h1").text() == "Game over! Press a Key to restart."){
    nextLevel()
  }
});

$(".btn").click(function(){
  var targetButtonId = "#" + event.target.id
  var targetButton = event.target.id
  $(targetButtonId).addClass("pressed")
  setTimeout(() => {
    $(targetButtonId).removeClass("pressed")}, 100)
  var audio = new Audio('sounds/'+targetButton+'.mp3');
  audio.play();
  if (event.target.id!=checkList[counter]){
    var wrongAudio = new Audio('sounds/wrong.mp3');
    wrongAudio.play();
    checkList=[]
    counter = 0
    $("h1").text("Game over! Press a Key to restart.")
    $("body").css("background-color", "red")
    setTimeout(() => {$("body").css("background-color", "#011F3F")}, 150)
  }
  else{
    counter ++;
  }
  if(checkList.length==counter && checkList.length != 0){
    setTimeout(() => { nextLevel() }, 800);
  }
});
