const gameBody = document.getElementById("game-body");
const $lives = document.getElementById("lives");
var seconds = document.getElementById("timer").textContent;
var zombieId = 0;

//Iteration 1: Create an array and store zombie images


//Iteration 2: Add shotgun sound
 

//Iteration 3: Use audio methods to enhance the audio effects


const backgroundSound = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/soundtrack.mp3"
);
backgroundSound.play();


// Iteration 4: Use loop property to repeat the background sound



const maxlives = 4;
var lives = 4;

//Iteration 5: Function to create a zombie


// Iteration 6: Function to check if the player has missed clicking on a zombie



//  Iteration 7:Function to destroy a zombie when it is shot or missed



// Iteration 8: Start game by calling the makeZombie function


// Iteration 9: Create a function to get random integer



// Timer
var timer = setInterval(function () {
  seconds--;
  document.getElementById("timer").textContent = seconds;
  let zombie = document.getElementById("zombie" + zombieId);
  if (checkCollision(zombie) == true) {
    zombieDestruct(zombie);
    if (lives == 0) {
      clearInterval(timer);
      endGame("lost");
    }
  }
  if (seconds == 0) {
    clearInterval(timer);
    endGame("won");
  }
}, 1000);