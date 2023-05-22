var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimages = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimages);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimages2 ="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimages2);

if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomnumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="draw";
}