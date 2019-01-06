/*Title: Color Game Project
Technology: HTML, CSS, JS
programmer: Hemant Choudhari
email: hemantc09@gmail.com
file: colorGame.js*/

var numOfSquares = 6; 
var colors = []; //colors empty array
var pickedColor;   //pickColor(); //function pick color //goal color to be picked
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode"); //remember the . for the class
init(); // init the game
function init(){
	setUpModeButtons(); //easy or hard
	setUpSquares(); //set up all squares
	resetfun(); //reset the game
}
function setUpModeButtons(){
	//mode button event listen
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			//remove the class selected for the safer side first
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//select the number of squares for easy and the hard mode
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares  = 6; //ternary operator
			resetfun();
		});
	}
}
function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
	//on below line always use the style.backgroundColor instead of style.background
	// because style.background doesnt work on FF
	//add click listeres to square
		squares[i].addEventListener("click",function(){
			//grab color of the square
			var clickedColor = this.style.backgroundColor;
			//compare color to the picked color
			if(clickedColor === pickedColor){ 
				messageDisplay.textContent = "Correct!";
				messageDisplay.style.color = 'green';
				changeColors(clickedColor); //pass the clicked color to change all square same picked color
				h1.style.backgroundColor = clickedColor; //make h1 background to clicked color
				resetBtn.textContent = "Play Again?";	
			}
			else{
				
				this.style.backgroundColor =  "#232323";
				messageDisplay.textContent = "Try again";
				messageDisplay.style.color = 'red';
			}
		});
	}
}
function resetfun(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares); // get teh array of colors[]
	//pick new random colors from arrya 
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor the span tag rgb(0,2,5) 
	colorDisplay.textContent = pickedColor; //assigning the picked color to RGB text display
	//after win reset the text for new Color
	resetBtn.textContent = "New Color!"; 
	//change colors of square
	for(i = 0; i < squares.length; i++){
		if(colors[i]){ // if there is a color in the array then change background
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else{ //if there is no color to change in the array hide it //mostly for easy mode 
			squares[i].style.display = "none";
		}
	}
	//change the background of h1
	h1.style.backgroundColor = "#232323";
	//change the message to blank
	messageDisplay.textContent = " ";
}
resetBtn.addEventListener("click", function(){
	resetfun();
});
// colorDisplay.textContent = pickedColor; 
function changeColors(color){
	//all square to change each color to the given color e.g. picked correct color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	//pick a random number
	//random number is from array length and floor it to get the whole number
	var random = Math.floor(Math.random() * colors.length); 
	//in above the length is 6 but we want the number between 1 to 5 ..
	//random dont include 6 FYI.
	return colors[random];
}
function generateRandomColors(num){
	//make an array 
	var arr = [];
	//repeat num times
	for (var i = 0 ; i < num ; i++) {
		//get random color push in to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256 ); //get number from 0 to 255
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256 );
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256 );
	return "rgb(" + r +", " + g + ", " + b + ")"; // rgb format  rgb(0, 255, 22); make a string 
}