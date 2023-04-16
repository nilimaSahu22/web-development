var random_number1 =  Math.floor(Math.random()*6 + 1);
var randomDiceimage1 = "dice"+ random_number1 +".png";// dice1.png to dice6.png
var randomImagesource1 = "images/" + randomDiceimage1 ;// changed source attribute
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource1);
var random_number2 =  Math.floor(Math.random()*6 + 1);
var randomImagesource2 = "images/dice" + random_number2 + ".png"; 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);
if (random_number1 > random_number2){
    document.querySelector("h1").innerHTML="Palyer 1 Wins";
}
else if (random_number2 > random_number1){
    document.querySelector("h1").innerHTML="Player 2 wins";   
}
else{
    document.querySelector("h1").innerHTML="It's a tie";
}
