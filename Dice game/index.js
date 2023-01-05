document.onload(value());
function value(){
var no1=Math.floor((Math.random()*6)+1);
var no2=Math.floor((Math.random()*6)+1);
image1="/Users/gurpreetsingh/Downloads/Dicee Challenge - Starting Files/images/dice"+no1+".png";
image2="/Users/gurpreetsingh/Downloads/Dicee Challenge - Starting Files/images/dice"+no2+".png"
document.getElementsByClassName("dice")[0].querySelector(".img1").setAttribute("src",image1);
document.getElementsByClassName("dice")[1].querySelector(".img2").setAttribute("src",image2);
if(no1>no2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins!";
}
if(no2>no1)
{
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins!";
}
if(no1==no2){
  document.getElementsByTagName("h1")[0].innerHTML="Draw!";
}
}
