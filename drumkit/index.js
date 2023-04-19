 var no_OfButton =document.querySelectorAll(".drum").length;
// alert(no_OfButton);
for(var i = 0; i< no_OfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // this.style.color="white";
        var SoundButton = this.innerHTML;
        makesound(SoundButton);
        buttonAnimation(SoundButton);
    });//passing anonymous function as argument here.
}
//adding sound through keyboard.
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})
function makesound(key){
    switch(key){
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
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
    }
}
function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);

}



// var audio = new Audio("sounds/tom-1.mp3"); // addig sound feature to each key .
// audio.play();