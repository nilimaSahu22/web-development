 var no_OfButton =document.querySelectorAll(".drum").length;
 alert(no_OfButton);
for(var i = 1; i< no_OfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        alert("i got clicked");
    });//passing anonymous function as argument here.
}
