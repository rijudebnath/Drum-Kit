var numberOfButtons = Array.from(document.querySelectorAll(".drum"));

numberOfButtons.forEach((element) => {
  element.addEventListener("click", function (event) {
    var buttonInnerhtml = event.target.innerHTML;
    makeSound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
  });
});

document.addEventListener("keypress", function(event) {
  console.log(event)

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/crash.mp3");
      tom2.play();
      break;
    case "l":
      var tom2 = new Audio("sounds/kick-bass.mp3");
      tom2.play();
    default:
      console.log("hello world");
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100)
}
