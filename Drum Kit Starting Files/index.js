for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInner = this.innerHTML
    switch (buttonInner) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
        break;
      case "a":
        var tom1 = new Audio("sounds/tom-2.mp3")
        tom1.play();
        break;
      case "s":
        var tom1 = new Audio("sounds/tom-3.mp3")
        tom1.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-4.mp3")
        tom1.play();
        break;
      case "j":
        var tom1 = new Audio("sounds/crash.mp3")
        tom1.play();
        break;
      case "k":
        var tom1 = new Audio("sounds/kick-bass.mp3")
        tom1.play();
        break;
      case "l":
        var tom1 = new Audio("sounds/snare.mp3")
        tom1.play();
        break;
      default: console.log(buttonInner)
    }
    buttonAnimation(buttonInner)
  });
}

addEventListener("keydown", function(event){
  buttonAnimation(event.key)
  switch (event.key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3")
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3")
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3")
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/crash.mp3")
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/kick-bass.mp3")
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/snare.mp3")
      tom1.play();
      break;
    default: console.log(buttonInner)
  }
});

function buttonAnimation(keyboardpress) {
  var activeButton = document.querySelector("." + keyboardpress)
  activeButton.classList.add("pressed")
  setTimeout(() => {  activeButton.classList.remove("pressed"); }, 100);
}
