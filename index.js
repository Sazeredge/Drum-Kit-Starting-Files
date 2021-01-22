var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var innerHtml = this.innerHTML;
    makeSound(innerHtml);
  });
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
});

function makeSound(key){
  switch (key) {
    case 'w':
      var w = new Audio("sounds/crash.mp3");
      w.play();
      document.querySelector(".w").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".w").classList.remove("pressed")
      },100);
      break;
    case 'a':
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      document.querySelector(".a").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".a").classList.remove("pressed")
      },100);
      break;
    case 's':
      var s = new Audio("sounds/snare.mp3");
      s.play();
      document.querySelector(".s").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".s").classList.remove("pressed")
      },100);
      break;
    case 'd':
      var d = new Audio("sounds/tom-1.mp3");
      d.play();
      document.querySelector(".d").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".d").classList.remove("pressed")
      },100);
      break;
    case 'j':
      var j = new Audio("sounds/tom-2.mp3");
      j.play();
      document.querySelector(".j").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".j").classList.remove("pressed")
      },100);
      break;
    case 'k':
      var k = new Audio("sounds/tom-3.mp3");
      k.play();
      document.querySelector(".k").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".k").classList.remove("pressed")
      },100);
      break;
    case 'l':
      var l = new Audio("sounds/tom-4.mp3");
      l.play();
      document.querySelector(".l").classList.add("pressed");
      setTimeout(function(){
      document.querySelector(".l").classList.remove("pressed")
      },100);
      break;
    default:

  }
}
