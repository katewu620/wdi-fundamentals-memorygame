console.log("JS file is connected to HTML! Woo!")

var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

// if (cardOne === cardTwo){
// 	alert("You found a match!");
// } else {
// 	alert('Sorry, try again.');
// }


	
	

var gameBoard = document.getElementById('game-board');

var cards = [cardOne,cardTwo,cardThree,cardFour];

for (var i = 0; i < cards.length; i++){

// create div element for cards
var cardsElement = document.createElement('div');
// add a class name
cardsElement.className = 'card';
// append the area to a div element
gameBoard.appendChild(cardsElement);

}







	






