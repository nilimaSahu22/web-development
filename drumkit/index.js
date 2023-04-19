 var no_OfButton =document.querySelectorAll(".drum").length;
// alert(no_OfButton);
for(var i = 0; i< no_OfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // this.style.color="white";
        var buttoninnerHTML = this.buttoninnerHTML;
        switch(buttoninnerHTML){
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
                var kick = new Audio("soounds/kick.mp3");
                kick.play();
                break;
            default:
        }
       

    });//passing anonymous function as argument here.
}



// var audio = new Audio("sounds/tom-1.mp3"); // addig sound feature to each key .
// audio.play();