//changing the dice images

var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png -> dice6.png

randomImageSource = "images/" + randomDiceImage; // images/dice1.png -> images/dice2.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//starting the second dice

var randomNumber2 = Math.floor((Math.random() * 6)) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//Changing the h1 header

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}





























// if (randomNumber1 === 1){
//     document.querySelector("img").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 === 2){
//     document.querySelector("img").setAttribute("src", "images/dice2.png");
// }
// else if (randomNumber1 === 3){
//     document.querySelector("img").setAttribute("src", "images/dice3.png");
// }
// else if (randomNumber1 === 4){
//     document.querySelector("img").setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber1 === 5){
//     document.querySelector("img").setAttribute("src", "images/dice5.png");
// }
// else {
//     document.querySelector("img").setAttribute("src", "images/dice6.png");
// }